import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Политика конфиденциальности</h1>

      <div className="prose prose-gray max-w-none flex flex-col gap-6 text-gray-700">
        <p className="text-gray-500 text-sm">Последнее обновление: июнь 2025</p>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Общие положения</h2>
          <p>Настоящая Политика конфиденциальности описывает, как мы собираем, используем и защищаем персональные данные, которые вы предоставляете через формы на сайте.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Какие данные мы собираем</h2>
          <p>Через формы на сайте мы можем собирать следующие данные:</p>
          <ul className="list-disc pl-6 mt-2 flex flex-col gap-1">
            <li>Имя</li>
            <li>Имя пользователя в Telegram или номер телефона</li>
            <li>Адрес электронной почты (если вы его указали)</li>
            <li>Название компании или магазина (для формы курирования)</li>
            <li>Текст сообщения, который вы оставляете в свободном поле</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Как используются данные</h2>
          <p>Собранные данные используются исключительно для:</p>
          <ul className="list-disc pl-6 mt-2 flex flex-col gap-1">
            <li>Связи с вами по вопросу оставленной заявки</li>
            <li>Информирования об открытии набора на курс (для формы предзаписи)</li>
            <li>Уточнения деталей по запросу на консультацию или курирование</li>
          </ul>
          <p className="mt-2">Ваши данные не передаются третьим лицам и не используются в маркетинговых целях без вашего согласия.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Хранение данных</h2>
          <p>Данные из форм передаются через защищённое соединение и сохраняются в Telegram-боте или на защищённом сервере. Данные хранятся столько, сколько необходимо для обработки вашего запроса.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Ваши права</h2>
          <p>Вы можете в любой момент запросить удаление своих персональных данных. Для этого свяжитесь с нами через Telegram.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. Контакты</h2>
          <p>По вопросам, связанным с обработкой персональных данных, обращайтесь через Telegram-канал, ссылка на который указана в шапке сайта.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Изменения политики</h2>
          <p>Мы оставляем за собой право вносить изменения в настоящую Политику. Актуальная версия всегда доступна на этой странице.</p>
        </section>
      </div>
    </div>
  )
}
