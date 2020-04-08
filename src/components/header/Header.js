import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

import './header.scss';

export const Header = () => {
  return (
    <nav className="app-nav">
      <ul className="routes">
        <li>
          <a href="/" className="active"><FontAwesomeIcon icon={faList} /></a>
        </li>
      </ul>

      <ul className="filters">
        <li>
          <a href="#">All</a>
        </li>
        <li>
          <a href="#">Active</a>
        </li>
        <li>
          <a href="#">Completed</a>
        </li>
      </ul>
    </nav>
  )
}