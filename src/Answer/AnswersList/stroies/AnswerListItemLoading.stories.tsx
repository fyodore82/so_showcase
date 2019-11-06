import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { AnswerListItemLoading } from '../AnswerListItemLoading'

storiesOf('AnswerListItemLoading', module)
  .add('default', () => <AnswerListItemLoading />)