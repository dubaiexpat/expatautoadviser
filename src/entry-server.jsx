import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import React from 'react';
import { AppRoutes } from './App.jsx';

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
}
