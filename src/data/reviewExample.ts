export type ReviewExample = {
  name: string;
  avatar: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date: string;
  likes: number;
  advantages?: string;
  flaws?: string;
  answers?: { text: string; date: string; name: string }[];
};
export const reviewExamples: ReviewExample[] = [
  {
    name: "Євген Чоботинський",
    avatar:
      "https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-145493.jpg?semt=ais_hybrid",
    rating: 4,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil cum autem non corrupti distinctio, quae perferendis aperiam quod minima debitis et cupiditate velit, necessitatibus quasi possimus exercitationem beatae laudantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut perferendis nobis accusamus blanditiis debitis corporis exercitationem consequatur? Esse, quas, illum ducimus maiores enim saepe nobis, accusamus cum libero dolore laudantium!",
    date: "15.03.2024",
    likes: 12,
    advantages:
      "Абсолютно не шумить, поки не зміг знайти завдання, при якому Lorem Ipsum потрібно підключити кулери для охолодження",
    flaws: "Немає",
    answers: [
      {
        text: "Привіт! Раді, що техніка Lorem Ipsum припала Вам до душі. Дякуємо за залишений відгук та бажаємо успішної експлуатації на довгий час!",
        date: "15.03.2025",
        name: "Голова бренду",
      },
      {
        text: "Привіт! Раді, що техніка Lorem Ipsum припала Вам до душі. Дякуємо за залишений відгук та бажаємо успішної експлуатації на довгий час!",
        date: "15.03.2025",
        name: "Голова бренду",
      },
    ],
  },
  {
    name: "Михайло Іваненко",
    avatar:
      "https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-145493.jpg?semt=ais_hybrid",
    rating: 2,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil cum autem non corrupti distinctio, quae perferendis aperiam quod minima debitis et cupiditate velit, necessitatibus quasi possimus exercitationem beatae laudantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut perferendis nobis accusamus blanditiis debitis corporis exercitationem consequatur? Esse, quas, illum ducimus maiores enim saepe nobis, accusamus cum libero dolore laudantium!",
    date: "15.03.2024",
    likes: 5,
    flaws:
      "Абсолютно не шумить, поки не зміг знайти завдання, при якому Lorem Ipsum потрібно підключити кулери для охолодження",
    answers: [
      {
        text: "Привіт! Раді, що техніка Lorem Ipsum припала Вам до душі. Дякуємо за залишений відгук та бажаємо успішної експлуатації на довгий час!",
        date: "15.03.2025",
        name: "Голова бренду",
      },
    ],
  },
  {
    name: "Олександра",
    avatar:
      "https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-145493.jpg?semt=ais_hybrid",
    rating: 5,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil cum autem non corrupti distinctio, quae perferendis aperiam quod minima debitis et cupiditate velit, necessitatibus quasi possimus exercitationem beatae laudantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut perferendis nobis accusamus blanditiis debitis corporis exercitationem consequatur? Esse, quas, illum ducimus maiores enim saepe nobis, accusamus cum libero dolore laudantium!",
    date: "15.03.2024",
    likes: 11,
  },
];
