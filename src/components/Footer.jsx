/** @format */

import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div data-testid="copyright">&copy; 2023 JavaScript 401</div>
      <ul className="footer__items">
        <li data-testid="react">React</li>
        <li data-testid="redux">Redux</li>
        <li data-testid="mui">Material UI</li>
      </ul>
    </footer>
  );
}
