/** @format */

import { Card, ListItemButton } from '@mui/material';
import React from 'react';

export default function Header() {
  return (
    <header>
      <nav>
        <Card className="navbar">
          <div className="navbar__logo">
            <ListItemButton data-testid="test-logo">
              Benson's Store
            </ListItemButton>
          </div>
          <div className="navbar__cart">
            <ListItemButton data-testid="test-cart">Cart (0)</ListItemButton>
          </div>
        </Card>
      </nav>
    </header>
  );
}
