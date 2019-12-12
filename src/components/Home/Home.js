import React from 'react';
import ava from '../../css/img/avatar.jpg'

const Home = (props) => {
  return (
        <main>
          <div className="center">
            <div className="avatar-information">
              <div className="avatar wow bounceInLeft" data-wow-delay="500ms" data-wow-duration="2s">
                 <img src={ava} alt="Фото профіля"/>
              </div>

              <div className="information">
                <h1>
                  Full Stack Developer
                </h1>

                <section className="pane wow slideInLeft">
                  <h3>
                    <span className="gold-text">П.І.Б.: </span>
                    Липянець Сергій Леонідович
                  </h3>

                  <h4>
                    <span className="gold-text">Дата народження: </span>
                    17.03.1990
                  </h4>
                </section>

                <section className="pane wow slideInRight">
                  <h4>
                    <span className="gold-text">Вид зайнятості: </span>
                    повна зайнятість, дистанційна робота
                  </h4>

                  <h4>
                    <span className="gold-text">Бажане місто роботи: </span>
                    Після місяця роботи дестанційно готовий до переїзду
                  </h4>
                </section>

              </div>
            </div>

            <div className="pane print-hidden">
              <h4>
                <span className="gold-text">Місто проживання: </span>
                Житомир
              </h4>

              <h4>
                <span className="gold-text">Skype: </span>
                serg_uk_zt
              </h4>

              <h4>
                <span className="gold-text">Телефон: </span>
                +380 98 96 96 952
              </h4>

              <h4>
                <span className="gold-text">Email: </span>
                main.email.seryoga@gmail.com
              </h4>

              <h4>
                <span className="gold-text">Робочі години: </span>
                Пн-Пт: 10:00 - 19:00 <br/>
                <span className="gold-text">Для пропозицій від яких не зможу відмовитися, на зв`язку цілодобово :)</span>
              </h4>
            </div>

            <h2>Досвід роботи</h2>

            <ul className="pane wow slideInLeft">
              <li>
                <span className="gold-text">з 02.2013 по 05.2018</span>
              </li>
              <li>
                <span className="gold-text">Freelance,</span> Житомир (Front-end), декілька веб-студій(дистанційна)
                <br/>
                <br/>
              </li>
              <li>
                <span className="gold-text">з 05.2018 по 02.2019 </span>
              </li>
              <li>
                <span className="gold-text">Агентство Дмитрия Димбровского,</span> FullStack: верстка по макетам PSD,
                email розсилка; програмування як лендінгів(відправка форм, js функціонал) так і робота з популярними
                CMS; беру активну участь в дизайні десктоп версії макетів, адаптація і дизайн сайтів власний без
                допомоги дизайнера, також роблю дизайн сторінок "Дякую"; всі можливі задачі з роботую різноманітних
                хостенгів, доменів, робота з БД; Робота з чужим кодом. Налаштування Яндекс метрики, Google Аналитик.
                Постійно робота над декількома проетами.
              </li>
            </ul>

            <h2>Освіта</h2>

            <ul className="pane wow slideInRight">
              <li>
                <span className="gold-text">Житомирський Державний Технологічний Університет</span>
              </li>
              <li>
                <span className="gold-text">Факультет:</span> інформаційно комп`ютерних технологій
              </li>
              <li>
                <span className="gold-text">Вища,</span> з 09.2007 по 05.2012 (4 роки 8 місяців)
              </li>
            </ul>

            <h2>Навички роботи з комп’ютером</h2>

            <section className="pane wow slideInLeft">
              <p>
                <span className="gold-text">Вмію якісно і валідно верстати.</span> Розумію особливості верстки
                кросбравзерно, кросплатформенно, адаптивно, для мобільних пристроїв, Firefox, Opera, Safari, Chrome.
              </p>

              <p>
                <span className="gold-text">Постійно використовую:</span> HTML5, CSS3, jQuery, Less, FlexBox, Ajax, PHP;<br/>
                Розуміння принципу роботи збирачів проекту <span className="gold-text">(grunt, gulp),</span> вмію
                верстати під pixel perfect responsive.
              </p>

              <p>
                <span className="gold-text">CMS: </span> <span title="3+">WordPress</span>, <span
                    title="3+">OpenCart</span>, <span title="50+">SmartCJ</span>
              </p>

              <p>
                <span className="gold-text">Маю розуміння: </span> <span
                    title="Коли працював контет менеджером багато данних вносив">MySql</span>, <span
                    title="Потрібно активно використовувати">SVG,</span> Ajax, БЕМ, JSF
              </p>

              <p>
                <span className="gold-text">Вивчаю: React</span> (Стефанов С. - React.js Быстрый старт - 2017); також
                знову почав вивчати <span className="gold-text">PHP OOP</span> після відновлення знань <span
                    className="gold-text">Yii2</span>
              </p>

              <p>
                <span className="gold-text">Працюю з графічними редакторами:</span> Adobe Photoshop
              </p>

              <p>
                <span className="gold-text">Працюю з редакторами кода:</span> SublimeText3, PhpStorm<br/>
                Добре володію ПК, Microsoft Office.
              </p>

            </section>

            <h2>Знання мов</h2>

            <ul className="pane wow slideInRight">
              <li>
                <span className="gold-text" title="Не спілкуюся, більшість друзів російськомовні">Російська</span> —
                експерт
              </li>
              <li>
                <span className="gold-text" title="Рідна, з недавнього часу активно вдосконалюю">Українська</span> —
                експерт
              </li>
              <li>
                <span className="gold-text" title="Нажаль майже не спілкуюся :(">Англійська</span> — середній
              </li>
            </ul>

            <h2>Додаткова інформація</h2>

            <section className="pane wow slideInLeft">
              <p>
                Знайшов роботу яка приносить задоволення, коли починаю працювати, повністю поглинаюся в процес!
              </p>

              <p>
                <span className="gold-text">Шукаю роботу на постійній основі</span> з офіційним працевлаштуванням і
                Кар'єрним ростом.
              </p>

              <p>
                Більшість часу працював, і я <span className="gold-text"
                                                   title="Декілька веб студій, підтримка сайтів, робота з чужим кодом. Все не згадати...">Маю поняття як потрібно працювати віддалено,</span> ставлюся
                до цього відповідально. Є веб-камера, високошвидкісний інтернет, все що потрібно для зв'язку.
              </p>

              <p>
                Преоритетним на даний момент є для мене розвиток в <span className="gold-text">php oop, ReactJs, Angular (Fullstack)</span>
              </p>

              <p>
                <span className="gold-text">Готовий до переїзду Тільки після деякого часу співробітництва віддалено</span> або
                у випадку забезпечення мого комфортного проживання!
              </p>

              <p>
                <span className="gold-text" title="50+">Виконав велику кількість адаптивних сайтів, навіть приблизно кількість сказати важко, більшість це 2-3 проекта на місяць, не так часто проети по 2-6 місяців. Постійно вдосконалюю знання навіть коли постійного навантаження немає.</span> Декілька
                робіт вказано на моєму сайті в розділі <a href="/portfolio.html" title="Go...">порфоліо.</a> <span
                    className="gold-text">Кожен проект для мене є важливим, Головне якість. Не використовую Bootsrap чи БЕМ так як вважаю що це більше для недосвідчених розробників.</span>
              </p>

              <p>
                Обов'язкова оплата перший місяць кожну неділю. Готовий відразу працювати на проекті в команді.
              </p>
            </section>
          </div>
        </main>
)
};

export default Home;