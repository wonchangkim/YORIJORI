import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import SignupScreen from '../src/components/Login/SignupScreen';

storiesOf('SignupScreen', module).add('default', () => (<SignupScreen onGoogleLogin={action('onGoogleLogin')}/>));
