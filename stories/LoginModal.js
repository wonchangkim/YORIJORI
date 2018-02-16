import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LoginModal from '../src/components/Login/LoginModal';

storiesOf('LoginModal', module).add('default', () => (<LoginModal onGoogleLogin={action('onGoogleLogin')} />));
