import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LoginForm from '../src/components/LoginForm';

storiesOf('LoginForm', module).add('default', () => (<LoginForm onGoogleLogin={action('onGoogleLogin')} />));
