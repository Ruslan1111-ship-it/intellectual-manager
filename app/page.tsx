'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
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
