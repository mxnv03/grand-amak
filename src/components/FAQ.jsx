import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
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
      answer: 'Ответ на вопрос про обработки щенка здесь...',
    },
    {
      question: 'Есть ли помощь и поддержка от заводчика?',
      answer: 'Ответ о помощи и поддержке от заводчика...',
    },
    {
      question: 'Я хочу купить у вас щенка, но нахожусь не в Москве. Что делать?',
      answer: `
        Оптимальной я считаю ситуацию, при которой будущий владелец сам приезжает за щенком. 
        Однако нет двух одинаковых случаев, и если вы хотите купить щенка аусси или вельш корги пемброк, 
        а приехать не можете, я подберу самый бережный вариант доставки для вас.
      `,
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
