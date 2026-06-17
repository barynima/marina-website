import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
}

const sections = [
  {
    title: '1. Общие положения',
    text: 'Настоящая Политика конфиденциальности описывает, как мы собираем, используем и защищаем персональные данные, которые вы предоставляете через формы на сайте.',
  },
  {
    title: '2. Какие данные мы собираем',
    text: 'Через формы на сайте мы можем собирать: имя, имя пользователя в Telegram или номер телефона, адрес электронной почты (если вы его указали), название компании или магазина (для формы управления), текст сообщения в свободном поле.',
  },
  {
    title: '3. Как используются данные',
    text: 'Собранные данные используются исключительно для связи с вами по вопросу оставленной заявки, информирования об открытии набора (для предзаписи) и уточнения деталей по запросу. Ваши данные не передаются третьим лицам и не используются в маркетинговых целях без вашего согласия.',
  },
  {
    title: '4. Хранение данных',
    text: 'Данные из форм передаются через защищённое соединение и сохраняются в Telegram-боте или на защищённом сервере. Данные хранятся столько, сколько необходимо для обработки вашего запроса.',
  },
  {
    title: '5. Ваши права',
    text: 'Вы можете в любой момент запросить удаление своих персональных данных. Для этого свяжитесь с нами через Telegram.',
  },
  {
    title: '6. Контакты',
    text: 'По вопросам, связанным с обработкой персональных данных, обращайтесь через Telegram-канал, ссылка на который указана в шапке сайта.',
  },
  {
    title: '7. Изменения политики',
    text: 'Мы оставляем за собой право вносить изменения в настоящую Политику. Актуальная версия всегда доступна на этой странице.',
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-paper">
      <section className="bg-ink text-paper pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-9">
          <p className="section-tag text-paper/40 mb-6">Документ</p>
          <h1 className="font-heading text-[clamp(2.5rem,7vw,7rem)] uppercase text-paper leading-none">
            Политика конфиден-<br />циальности
          </h1>
          <p className="font-body text-sm text-paper/30 mt-6">Последнее обновление: июнь 2025</p>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-9">
          <div className="max-w-3xl flex flex-col">
            {sections.map((s, i) => (
              <div key={i} className="border-b border-ink/10 py-8">
                <h2 className="font-heading text-xl uppercase text-ink mb-4">{s.title}</h2>
                <p className="font-body text-base text-ink/60 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
