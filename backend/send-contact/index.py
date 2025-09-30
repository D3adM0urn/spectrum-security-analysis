"""
Business: Обработка заявок с формы обратной связи и отправка на email и Telegram
Args: event - dict с httpMethod, body (JSON с name, phone)
      context - объект с атрибутами request_id, function_name
Returns: HTTP response dict
"""

import json
import smtplib
import os
import urllib.request
import urllib.parse
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any, Optional
from datetime import datetime

def send_telegram_message(bot_token: str, chat_id: str, name: str, phone: str, timestamp: str) -> bool:
    try:
        message = f"""🔔 <b>Новая заявка с сайта</b>
        
<b>SPK-SPECTRUM Corporate Security</b>

👤 <b>Имя:</b> {name}
📱 <b>Телефон:</b> {phone}
⏰ <b>Время:</b> {timestamp}

━━━━━━━━━━━━━━━━━
Заявка с сайта spk-spectrum.ru"""

        url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
        data = urllib.parse.urlencode({
            'chat_id': chat_id,
            'text': message,
            'parse_mode': 'HTML'
        }).encode('utf-8')
        
        req = urllib.request.Request(url, data=data)
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode('utf-8'))
            return result.get('ok', False)
    except Exception as e:
        print(f'Telegram error: {e}')
        return False

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_str = event.get('body', '{}')
    data = json.loads(body_str)
    
    name: str = data.get('name', '')
    phone: str = data.get('phone', '')
    
    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Name and phone are required'}),
            'isBase64Encoded': False
        }
    
    config = {}
    try:
        import pathlib
        config_path = pathlib.Path(__file__).parent / 'config.json'
        with open(config_path, 'r', encoding='utf-8') as f:
            config = json.load(f)
    except Exception:
        pass
    
    smtp_host = os.environ.get('SMTP_HOST', '')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER', '')
    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    email_to = os.environ.get('EMAIL_TO', '')
    
    telegram_bot_token = os.environ.get('TELEGRAM_BOT_TOKEN', config.get('telegram', {}).get('bot_token', ''))
    telegram_chat_id = os.environ.get('TELEGRAM_CHAT_ID', config.get('telegram', {}).get('chat_id', ''))
    
    has_email = all([smtp_host, smtp_user, smtp_password, email_to])
    has_telegram = all([telegram_bot_token, telegram_chat_id])
    
    if not has_email and not has_telegram:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'No notification method configured (email or telegram)'}),
            'isBase64Encoded': False
        }
    
    timestamp = datetime.now().strftime('%d.%m.%Y %H:%M:%S')
    
    email_sent = False
    telegram_sent = False
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта SPK-SPECTRUM от {name}'
    msg['From'] = smtp_user
    msg['To'] = email_to
    
    html_body = f"""
    <html>
      <head>
        <style>
          body {{ font-family: Arial, sans-serif; }}
          .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
          .header {{ background: #1e293b; color: white; padding: 20px; border-radius: 8px 8px 0 0; }}
          .content {{ background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; }}
          .field {{ margin: 15px 0; }}
          .label {{ font-weight: bold; color: #475569; }}
          .value {{ color: #1e293b; font-size: 16px; margin-top: 5px; }}
          .footer {{ background: #f1f5f9; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; color: #64748b; font-size: 12px; }}
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🔔 Новая заявка с сайта</h2>
            <p style="margin: 0; opacity: 0.9;">SPK-SPECTRUM Corporate Security</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Имя клиента:</div>
              <div class="value">{name}</div>
            </div>
            <div class="field">
              <div class="label">📱 Телефон:</div>
              <div class="value">{phone}</div>
            </div>
            <div class="field">
              <div class="label">⏰ Время получения:</div>
              <div class="value">{timestamp}</div>
            </div>
          </div>
          <div class="footer">
            Заявка отправлена автоматически с сайта spk-spectrum.ru
          </div>
        </div>
      </body>
    </html>
    """
    
    text_body = f"""
    Новая заявка с сайта SPK-SPECTRUM
    
    Имя: {name}
    Телефон: {phone}
    Время: {timestamp}
    
    ---
    Заявка отправлена автоматически с сайта spk-spectrum.ru
    """
    
    part1 = MIMEText(text_body, 'plain', 'utf-8')
    part2 = MIMEText(html_body, 'html', 'utf-8')
    
    msg.attach(part1)
    msg.attach(part2)
    
    if has_email:
        try:
            with smtplib.SMTP(smtp_host, smtp_port) as server:
                server.starttls()
                server.login(smtp_user, smtp_password)
                server.send_message(msg)
            email_sent = True
        except Exception as e:
            print(f'Email error: {e}')
    
    if has_telegram:
        telegram_sent = send_telegram_message(
            telegram_bot_token, 
            telegram_chat_id, 
            name, 
            phone, 
            timestamp
        )
    
    if email_sent or telegram_sent:
        methods = []
        if email_sent:
            methods.append('email')
        if telegram_sent:
            methods.append('telegram')
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': f'Notification sent via: {", ".join(methods)}'
            }),
            'isBase64Encoded': False
        }
    else:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': False,
                'error': 'Failed to send notification'
            }),
            'isBase64Encoded': False
        }