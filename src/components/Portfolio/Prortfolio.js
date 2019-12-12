import React from 'react';
import Project from "./Project";

const Portfolio = (props) => {

  debugger;
  const {projects} = props;

  let projectComponents = projects.map( e => <Project key={e.alt}
                                                      classEffect={e.classEffect}
                                                      src={e.src}
                                                      alt={e.alt}
                                                      href={e.href}
  />);
  return (
      <main>
        <div className="center">
          <h1 className="text-center title-page">
            Портфоліо
          </h1>
          <div className="pane">
            Дані роботи виконані мною. Вказані роботи можуть бути відображенні частково через схожість сторінок. Нажаль
            більшість робіт втрачено по різним причинам :(
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