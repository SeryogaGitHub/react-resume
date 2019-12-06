import React from 'react';

const Project = (props) => {
  const {classEffect} = props;
  return (
      <div className={'item wow ' + classEffect} data-wow-delay="project.delay"
           data-wow-duration="project.duration">
        <a href="project.href" target="_blank">
          <img src="project.src" alt="project.alt"/>
        </a>
      </div>
  );
};

export default Project;