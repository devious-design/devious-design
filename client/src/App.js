import React from 'react';
import classNames from 'classnames/bind';
import styles from './App.module.scss';

const cx = classNames.bind(styles);

const App = () => (
  <h1 className={cx('heading')}>
    Welcome to Devious Design
  </h1>
)

export default App;