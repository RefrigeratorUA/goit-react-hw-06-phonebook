import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Logo from '../Logo';
import Notification from '../Notification';
import './AppBar.css';

const AppBar = ({ message, onView, isShow }) => {
  const isError = message ? true : false;
  return (
    <header className="AppBar-wrapper">
      <CSSTransition in={true} appear={true} classNames="AppBar-logo" timeout={500} unmountOnExit>
        <Logo />
      </CSSTransition>

      <CSSTransition in={isError} classNames="AppBar-notification" timeout={250} unmountOnExit>
        <Notification onView={onView} message={message} />
      </CSSTransition>
    </header>
  );
};

export default AppBar;
