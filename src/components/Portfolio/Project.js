import React from 'react';

const Project = (props) => {
  const {classEffect, src, alt, href} = props;

  return (
      <div className={'item wow ' + classEffect} data-wow-delay="project.delay"
           data-wow-duration="project.duration">
        <a href={href} target="_blank">
          <img src={src} alt="project.alt" alt={alt}/>
        </a>
      </div>
  );
};

export default Project;