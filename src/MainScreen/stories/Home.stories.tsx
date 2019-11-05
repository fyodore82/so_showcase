import React from 'react';

import { MemoryRouter, withRouter } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { Home } from '../Home';

storiesOf('Home', module)
  .addDecorator(routerDecorator => (
      <MemoryRouter
        initialEntries={['/', '/typescript']}
        initialIndex={0}
      >
        {routerDecorator()}
      </MemoryRouter>
  ))
  .add('default', () => <Home />)