import React from 'react';

const ButtonLink = ({ url, text, padding }) => {
  return (
    <a
      href={url}
      className={`btn ${padding}`}
      target='_blank'
      rel='noopener noreferrer'
      download
    >
      {text}
    </a>
  );
};

export default ButtonLink;