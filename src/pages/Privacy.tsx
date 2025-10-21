import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
          Назад на главную
        </Button>

        <h1 className="text-4xl font-bold mb-8">Политика конфиденциальности</h1>

        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты информации о физических лицах 
              (далее — Пользователи), использующих сайт SPK-SPECTRUM.
            </p>
            <p className="mt-2">
              Использование сайта означает безоговорочное согласие Пользователя с настоящей Политикой 
              и указанными в ней условиями обработки персональной информации.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">2. Персональные данные</h2>
            <p>
              При заполнении формы обратной связи мы собираем следующую информацию:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Имя пользователя</li>
              <li>Номер телефона</li>
              <li>Электронная почта</li>
              <li>Сообщение (опционально)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">3. Цели сбора информации</h2>
            <p>
              Персональные данные используются исключительно для:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Обработки обращений пользователей</li>
              <li>Предоставления информации о продукции и услугах</li>
              <li>Связи с клиентами по вопросам сотрудничества</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">4. Защита информации</h2>
            <p>
              Мы принимаем необходимые организационные и технические меры для защиты персональной информации 
              от неправомерного доступа, изменения, раскрытия или уничтожения.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">5. Передача данных третьим лицам</h2>
            <p>
              Персональные данные не передаются третьим лицам, за исключением случаев, 
              предусмотренных законодательством Российской Федерации.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">6. Права пользователей</h2>
            <p>
              Пользователь имеет право:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Получать информацию о своих персональных данных</li>
              <li>Требовать уточнения, блокирования или уничтожения персональных данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">7. Срок хранения данных</h2>
            <p>
              Персональные данные хранятся в течение срока, необходимого для достижения целей их обработки, 
              если иной срок не предусмотрен законодательством.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">8. Контактная информация</h2>
            <p>
              По вопросам, связанным с обработкой персональных данных, вы можете обратиться:
            </p>
            <p className="mt-2">
              Email: <a href="mailto:info@spk-spectrum.ru" className="text-primary hover:underline">info@spk-spectrum.ru</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">9. Изменения политики</h2>
            <p>
              Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. 
              Актуальная версия всегда доступна на данной странице.
            </p>
          </section>

          <p className="text-sm mt-8 pt-6 border-t">
            Дата последнего обновления: 21 октября 2025 г.
          </p>
        </div>
      </div>
    </div>
  );
}
