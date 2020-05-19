import React from 'react';
import Project from "./Project";

const Portfolio = (props) => {
  const {projects} = props;

  let projectComponents = projects.map((e, index) => <Project key={e.alt + "-" + index} src={e.src} alt={e.alt} href={e.href}/>);

  return (
      <main className={'main-content'}>
        <div className="center">
          <h1 className="text-center title-page">
            Портфоліо
          </h1>
          <div className="pane">
            Дані роботи виключно виконані мною. Вказані роботи відображенні частково або тільки блоками які можна показати. Нажаль
            більшість робіт не відображено в даному портфоліо. :(
          </div>
          <div className="grid">
            {projectComponents}
          </div>
        </div>
      </main>
  );
}
  ;

  export default Portfolio;
