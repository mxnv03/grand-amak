import React from "react";
import "./OurValues.css";
import img1 from "/src/assets/ценности1.jpg"
import img2 from "/src/assets/ценности2.jpg"
import img3 from "/src/assets/ценности3.jpg"
import img4 from "/src/assets/ценности4.jpg"

interface ValueItem {
  img: string;
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    img: img1,
    title: "Бережное выращивание",
    description:
      "Ранняя социализация щенка крайне важна для того, чтобы он вырос прекрасной собакой. Именно поэтому все наши щенки растут в постоянном контакте с семьей, знакомятся с бытовыми раздражителями, контактируют с другими животными, после карантина каждый щенок учится гулять в городе, ездить на машине, вести себя в общественных местах.",
  },
  {
    img: img2,
    title: "Профессионализм и любовь",
    description:
      "Каждая Акита - результат большого труда - лучшие производители бережно собраны в родословной каждого малыша, тщательно подобранные пары обдумываются годами с учетом экстерьера, психики, индивидуальных тестов и исследований здоровья и рабочих качеств родителей. ",
  },
  {
    img: img3,
    title: "Забота о здоровье",
    description:
      "Профилактика - наше все. Тщательно продуманные схемы превентиыных  обработок и мероприятий на каждом этапе - от планирования и ведения беременности, вынашивания малышей, и до момента передачи владельцу - залог здоровья на долгие годы. ",
  },
  {
    img: img4,
    title: "Всегда рядом",
    description:
      "За годы работы с собаками я наработала богатые знания и общирнейшие связи. Совет, помощь делом, поиск специалиста (кинолог, хендлер, грумер, ветеринарный врач) в любом городе России и даже в другой стране. Весь этот огромный потенциал в вашем распоряжении, если вы - владелец Акиты. Если вы не хотите много общаться с заводчиком, я не буду навязываться, но всегда безмерно рада приветам от выпускников.",
  },
];

interface ValueCardProps {
  value: ValueItem;
}

const ValueCard: React.FC<ValueCardProps> = ({ value }) => {
  return (
    <div className="value-card">
      <img src={value.img} alt={value.title} className="value-image" />
      <h3 className="value-title">{value.title}</h3>
      <p className="value-description">{value.description}</p>
    </div>
  );
};

const ValuesSection: React.FC = () => {
  return (
    <section className="values-section">
      <h2 className="values-title">Наши ценности</h2>
      <div className="values-container">
        {values.map((value, index) => (
          <ValueCard key={index} value={value} />
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
