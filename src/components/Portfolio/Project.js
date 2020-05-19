import React from 'react';

const Project = (props) => {
  const {src, alt, href} = props;

  return (
      <div className={'item'}>
        <a href={href} target="_blank">
          <img src={src} alt="project.alt" alt={alt}/>
        </a>
      </div>
  );
};

export default Project;
