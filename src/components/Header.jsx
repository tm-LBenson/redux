/** @format */

import { Card } from '@mui/material';
import React from 'react';

export default function Header() {
  return (
    <header>
      <nav>
        <Card className="navbar">
          <div className="navbar__logo">Benson's Store</div>
          <div className="navbar__cart">Cart (0)</div>
        </Card>
      </nav>
    </header>
  );
}
