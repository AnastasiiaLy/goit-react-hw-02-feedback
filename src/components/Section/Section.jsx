import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({ title, children, className }) => {
  return (
    <section>
      <h1 className={className}>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
