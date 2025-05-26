import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NewsType } from "../../data/news";

import facebook from "../../assets/img/pages/article/facebook.svg";
import instagram from "../../assets/img/pages/article/instagram.svg";
import telegram from "../../assets/img/pages/article/telegram.svg";
import ArticleContainer from "../../components/ArticleContainer/ArticleContainer";
import PagePath from "../../components/PagePath/PagePath";

const Article: FC<{ news: NewsType[] }> = ({ news }) => {
  const { id } = useParams<{ id: string }>();

  const [currentArticle, setCurrentArticle] = useState<NewsType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [articleTitle, setArticleTitle] = useState<string | undefined>("");
  const [otherNews, setOtherNews] = useState<NewsType[]>([]);
  useEffect(() => {
    console.log(id);
  }, []);

  useEffect(() => {
    if (news.length !== 0) {
      setCurrentArticle(news.find((obj) => obj.id === Number(id)));
      setOtherNews(getRandomElements(news, 4));
      setIsLoading(true);
    }
  }, [news]);

  useEffect(() => {
    if (currentArticle) {
      setArticleTitle(currentArticle.title);
    }
  }, [currentArticle]);

  function getRandomElements(sourceArray: NewsType[], numElements: number) {
    const arrayCopy: NewsType[] = [...sourceArray];
    const selectedElements: NewsType[] = [];
    for (let i = 0; i < numElements; i++) {
      const randomIndex = Math.floor(Math.random() * arrayCopy.length);
      selectedElements.push(arrayCopy[randomIndex]);
      arrayCopy.splice(randomIndex, 1);
    }
    return selectedElements;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <PagePath
        link="/news"
        linkName="Новини"
        subLink={`/news/${id}`}
        subLinkName={articleTitle}
      />
      {isLoading && (
        <div className="flex justify-center gap-[24px]">
          <div className="max-w-[960px] flex flex-col gap-[16px] text-left">
            <div className="">
              <h1 className="subtitle">{currentArticle?.title}</h1>
              <div className="text-p-grey">Новини {currentArticle?.date}</div>
            </div>
            <p>
              У настільних стаціонарних комп'ютерах є романтика. Десктопи легко
              піддаються апгрейдам, вони підключаються до моніторів з широкою
              діагоналлю, ми самі зможемо вибрати відповідну акустику і таке
              інше. Але, незважаючи на всі ці привілеї та переваги, найбільшу
              популярність у сегменті комп'ютерних технологій набули саме
              ноутбуки. Сталося це, мабуть, через їхню мобільність і вільніше
              транспортування.
            </p>
            <img
              src="https://blog.comfy.ua/wp-content/uploads/2020/09/Noutbuk-Lenovo-c-zastavkoy.png"
              alt=""
            />
            <p>
              У настільних стаціонарних комп'ютерах є романтика. Десктопи легко
              піддаються апгрейдам, вони підключаються до моніторів з широкою
              діагоналлю, ми самі зможемо вибрати відповідну акустику і таке
              інше. Але, незважаючи на всі ці привілеї та переваги, найбільшу
              популярність у сегменті комп'ютерних технологій набули саме
              ноутбуки. Сталося це, мабуть, через їхню мобільність і вільніше
              транспортування.
            </p>
            <h3 className="subsubtitle-blue">Призначення ноутбука</h3>
            <p>
              Перед самим походом в магазин електроніки за новим ноутбуком, ми
              повинні відповісти самі собі на просте запитання: "Навіщо нам
              потрібен ноутбук?". Мається на увазі, що ми вже усвідомимо, що він
              нам потрібний, але ось, що ми робитимемо з його допомогою. Адже
              якщо ми купуємо комп'ютер лише для того, щоб дивитися на ньому
              відео, набирати текст, користуватися електронними таблицями та
              серфити в мережі Інтернет, то дорога геймерська машина нам не
              потрібна!
            </p>
            <img src="https://img.telemart.ua/img/news/2171-mini2.jpg" alt="" />
            <p>
              Інша річ, якщо ми гратимемо на ноутбуці в найсучасніші ігри або
              професійно займатимемося редагуванням фотографій і відео, то
              необхідно розглядати ноутбук зовсім іншого класу. На які класи
              можна умовно розділити ноутбуки, залежно від їх призначення? Це
              може бути базове складання, ноутбук для навчання, для роботи, для
              ігор і таке інше.
            </p>
            <h3 className="subsubtitle-blue">Розмір ноутбуку</h3>
            <p>
              Сьогодні найпоширенішим стандартом розмірів ноутбука є пристрої з
              діагоналлю екрану 15,6? Варто чітко розуміти, що від розміру
              екрану безпосередньо залежатимуть габарити ноутбука, але й навпаки
              – занадто компактний нетбук вмістити екран з широкою діагоналлю не
              вдасться. Як зрозуміти, наскільки великий екран у ноутбуці нам
              потрібен чи, навпаки, наскільки компактним ноутбук має бути?
            </p>
            <img
              src="https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp"
              alt=""
            />
            <p>
              Це рішення має повністю виходити з того, для чого сам ноутбук
              потрібний. Наприклад, якщо ноутбук знадобиться в основному для
              подорожей та роботи в інтернеті, то найкращим рішенням виявиться
              невеликий компактний нетбук з екраном 11-12? Якщо ж нам потрібний
              ноутбук для ігор, то найкраще вибирати середній ноутбук з
              діагоналлю 15,6?, але з відповідними параметрами продуктивності та
              охолодження. Великий ноутбук з 17-дюймовим екраном може
              знадобитися, якщо ми вибираємо універсальний пристрій для роботи,
              можливо для обробки графіки, фото та редагування відео.
            </p>
          </div>
          <div className="flex flex-col gap-[16px]">
            <a href="">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="">
              <img src={telegram} alt="telegram" />
            </a>
          </div>
        </div>
      )}
      <h3 className="subsubtitle mt-[8px]">Читайте також</h3>
      <div className="flex gap-[16px]">
        {otherNews.length !== 0 &&
          otherNews.map((item) => (
            <ArticleContainer article={item} id={item.id} />
          ))}
      </div>
    </div>
  );
};

export default Article;
