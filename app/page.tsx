'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
    }, 800);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ваш ИИ-менеджер по продажам
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10">
            Выявляет боль клиента, ведёт диалог и закрывает сделки — без эмоций, усталости и человеческих ошибок.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Начать бесплатно
            </button>
            <button
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white/10 transition"
            >
              Послушать демо
            </button>
          </div>
        </div>
      </header>

      {/* Pain Points */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Вы сталкиваетесь с этим?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Менеджеры уходят в отпуск — продажи падают",
              "Клиенты не отвечают на «стандартные» звонки",
              "Новые менеджеры теряют 30% лидов из-за неопытности",
              "Слишком много времени уходит на рутину",
              "Невозможно быстро масштабировать отдел продаж",
              "Человеческий фактор: эмоции, усталость, ошибки"
            ].map((item, i) => (
              <div key={i} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                <span className="text-indigo-600 mr-3 mt-0.5">✓</span>
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Как это работает</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {[
              { step: "1", title: "Загрузите базу", desc: "Импортируйте список клиентов (Excel, CSV)" },
              { step: "2", title: "Настройте сценарий", desc: "Укажите, как выявлять боль и что предлагать" },
              { step: "3", title: "Получайте лиды", desc: "ИИ звонит, ведёт диалог и передаёт горячие заявки" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md max-w-xs">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Послушайте, как это звучит</h2>
          <p className="text-lg mb-8">
            Наш ИИ не просто читает скрипт — он слушает, уточняет и адаптирует речь под ответы клиента.
          </p>
          <div className="bg-white p-6 rounded-xl inline-block shadow">
            <p className="text-gray-500 italic">Аудиодемо можно добавить позже через <audio src=&quot;/demo.mp3&quot; /></p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Тарифы</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border rounded-2xl p-8 text-center hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4">Старт</h3>
              <div className="text-4xl font-bold mb-4">Бесплатно</div>
              <ul className="space-y-2 mb-6 text-left">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> 100 минут звонков</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Базовый сценарий</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Email-поддержка</li>
                <li className="flex items-start"><span className="text-gray-400 mr-2">✕</span> Интеграция с CRM</li>
              </ul>
              <button className="w-full py-3 bg-gray-100 rounded-full font-bold text-gray-700">Начать</button>
            </div>
            <div className="border-2 border-indigo-600 rounded-2xl p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                Популярный
              </div>
              <h3 className="text-2xl font-bold mb-4">Профессионал</h3>
              <div className="text-4xl font-bold mb-4">2 990 ₽/мес</div>
              <ul className="space-y-2 mb-6 text-left">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> 2 000 минут</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Кастомный голос и сценарий</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Интеграция с вашей CRM</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Приоритетная поддержка</li>
              </ul>
              <button className="w-full py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition">
                Подключить
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы убрать человеческий фактор из продаж?</h2>
          <p className="mb-8 text-lg">Оставьте email — мы запустим для вас тестовую кампанию бесплатно.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ваш email"
              required
              className="flex-1 px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 rounded-full font-bold text-white ${isSubmitting ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'}`}
            >
              {isSubmitting ? 'Отправка...' : 'Получить доступ'}
            </button>
          </form>
          {isSuccess && <p className="mt-4 text-green-600 font-medium">Спасибо! Мы свяжемся с вами в ближайшее время.</p>}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-2">Intellectual Manager</div>
          <p className="text-gray-300 mb-4">ИИ, который продаёт лучше человека — потому что он не человек.</p>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
