import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import EditSvg from '../../../assets/taskIcons/edit.svg';
import DeleteSvg from '../../../assets/taskIcons/trash.svg';
import Modal from '../../Modal';

const Task = ({ title, description, responsible }) => {
  return (
    <div className={styles.task}>
      <header className={styles.header}>
        <h4>{title}</h4>
        <div className={styles.tasksImages}>
          <img className={styles.img} src={EditSvg} alt="" />
          <img className={styles.img} src={DeleteSvg} alt="" />
        </div>
      </header>
      <p>{description}</p>
      <span>{responsible}</span>
      <Modal />
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  responsible: PropTypes.string,
};
export default Task;
