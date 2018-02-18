import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import WrappedRegistrationForm from '../src/components/Login/WrappedRegistrationForm';

storiesOf('WrappedRegistrationForm', module).add('default', () => (<WrappedRegistrationForm onGoogleLogin={action('onGoogleLogin')}/>));
