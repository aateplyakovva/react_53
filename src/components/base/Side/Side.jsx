import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

function Side() {
  return (
    <div className={styles.side}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link className={styles.a} to="/">
            Home
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.a} to="/kanban">
            Kanban board
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.a} to="/3">
            3rd page
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.a} to="/4">
            4th page
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Side;
