import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

export const Header = (props) => {
  return (
    <nav className="app-nav">
      <ul className="routes">
        <li>
          <Link to="/" className="active"><FontAwesomeIcon icon={faList} /></Link>
        </li>
      </ul>

      <ul className="filters">
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/active">Active</Link>
        </li>
        <li>
          <Link to="/completed">Completed</Link>
        </li>
      </ul>
    </nav>
  )
}