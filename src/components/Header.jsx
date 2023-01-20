/** @format */

import { Card, ListItemButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import SimpleCart from './SimpleCart';

export default function Header() {
  return (
    <header>
      <nav>
        <Card className="navbar">
          <div className="navbar__logo">
            <ListItemButton data-testid="test-logo">
              <Link to="/">Benson's Store</Link>
            </ListItemButton>
          </div>

          <SimpleCart />
        </Card>
      </nav>
    </header>
  );
}
