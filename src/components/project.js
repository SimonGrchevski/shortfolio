import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Popup from './popup';
import Card from './card';

const Project = ({
  name, demoUrl, imageUrl, description, technologies, repoLink,
}) => {
  const [toggleOn, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggleOn);
  };

  const handleClose = () => {
    setToggle(!toggleOn);
  };
  return (
    <article>
      { !toggleOn && <Card name={name} handleClick={handleClick} imageUrl={imageUrl} />}

      { toggleOn && (
      <Popup
        name={name}
        demoUrl={demoUrl}
        imageUrl={imageUrl}
        description={description}
        technologies={technologies}
        repoLink={repoLink}
        handleClose={handleClose}
      />
      )}
    </article>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  demoUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  repoLink: PropTypes.string.isRequired,
};

export default Project;
