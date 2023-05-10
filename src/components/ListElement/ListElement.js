import React from 'react';
import css from './ListElement.module.css';

const ListElement = ({ onDeleteContact, number, name }) => {
  return (
    <>
      <p className={css.contacts__text}>
        {name}: {number}
      </p>
      <button
        type="button"
        className={css.contacts__btn}
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </>
  );
};

export default ListElement;
