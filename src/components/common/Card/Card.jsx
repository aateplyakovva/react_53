/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable prettier/prettier */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';
import styles from './styles.scss';


const Card = ({ title, tasks }) => {
    const tasksItem = tasks.map((item) => (
      <Task
          key={item.id}
          title={item.title}
          description={item.description}
          responsible={item.responsible}
          />
      ))
  return (
    <div className={styles.card}>
      <header className={styles.header}>{title}</header>
      <section className={styles.section}>
        {tasksItem}
      </section>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.array,
};

export default Card;
