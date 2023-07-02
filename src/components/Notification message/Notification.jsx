import css from './Notification.module.css';
import PropTypes from 'prop-types';
import React from 'react';

export const Notification = ({ message }) => {
  return (
    <div>
      <p className={css.notification}>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
