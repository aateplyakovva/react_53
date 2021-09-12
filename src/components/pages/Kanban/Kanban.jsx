/* eslint-disable prettier/prettier */
import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './styles';
import Card from '../../common/Card/Card';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

const tasks = [
  {
    title: 'title1',
    description: 'description1',
    responsible: 'responsible1',
    taskStatus: 'Backlog',
  },
  {
    title: 'title2',
    description: 'description2',
    responsible: 'responsible2',
    taskStatus: 'Backlog',
  },
  {
    title: 'title3',
    description: 'description3',
    responsible: 'responsible3',
    taskStatus: 'Review',
  },
  {
    title: 'title4',
    description: 'description4',
    responsible: 'responsible4',
    taskStatus: 'Review',
  },
  {
    title: 'title5',
    description: 'description5',
    responsible: 'responsible5',
    taskStatus: 'Complete',
  },
  {
    title: 'title6',
    description: 'description6',
    responsible: 'responsible6',
    taskStatus: 'In progress',
  },
  {
    title: 'title7',
    description: 'description7',
    responsible: 'responsible7',
    taskStatus: 'In progress',
  },
  {
    title: 'title8',
    description: 'description8',
    responsible: 'responsible8',
    taskStatus: 'In progress',
  },
  {
    title: 'title9',
    description: 'description9',
    responsible: 'responsible9',
    taskStatus: 'In progress',
  },
  {
    title: 'title10',
    description: 'description10',
    responsible: 'responsible10',
    taskStatus: 'In progress',
  },
  {
    title: 'title11',
    description: 'description11',
    responsible: 'responsible11',
    taskStatus: 'Backlog',
  },
];

function Kanban() {
  return (
    <div className={classes.kanban}>
      <Card tasks={tasks.filter(({ taskStatus }) => taskStatus === 'Backlog')} title="Backlog" />
      <Card tasks={tasks.filter(({ taskStatus }) => taskStatus === 'In progress')} title="In progress" />
      <Card tasks={tasks.filter(({ taskStatus }) => taskStatus === 'Review')} title="Review" />
      <Card tasks={tasks.filter(({ taskStatus }) => taskStatus === 'Complete')} title="Complete" />
    </div>
  );
}

export default Kanban;
