import React, { useState } from 'react';
import './FAQ.css';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions: FAQItem[] = [
    {
      question: 'Какие документы мы получим вместе со щенком?',
      answer: (
        <>
          ✓ Метрика щенка РКФ (щенячья карточка). Позже вы можете обменять ее на родословную в РКФ;<br />
          ✓ Договор (условия согласовываются индивидуально);<br />
          ✓ Ветеринарный паспорт с отметками о дегельминтизациях, вакцинациях, чипировании.
        </>
      ),
    },
    {
      question: 'Какие обработки будут у щенка?',
      answer: `Все наши щенки в обязательном порядке трехкратно обработаны от гельминтов (в 21, 32, 43 дня)
           и в возрасте 7 – 8 недель впервые вакцинируются. Обычно первые щенки разъезжаются 
           по новым домам в возрасте 60 дней, и уже в новом доме продолжается их карантин и проходит ревакцинация.`,
    },
    {
      question: 'Есть ли помощь и поддержка от заводчика?',
      answer: `Я всегда с огромным вниманием отношусь к выбору владельцев для 
        своих выпускников, остаюсь на связи и радуюсь успехам и победам подрастающих щенков. 
        В сложных ситуациях всегда помогу и посоветую, найду специалиста, или просто поддержу, если это нужно.`,
    },
    {
      question: 'Я хочу купить у вас щенка, но нахожусь не в Нижегородской области. Что делать?',
      answer: `
        Оптимальной я считаю ситуацию, при которой будущий владелец сам приезжает за щенком. 
        Однако нет двух одинаковых случаев, и если вы хотите купить щенка аусси или вельш корги пемброк, 
        а приехать не можете, я подберу самый бережный вариант доставки для вас.`,
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Частые вопросы</h2>
      {questions.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.question}</span>
            <span className="faq-toggle">{activeIndex === index ? '−' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
