import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import LoginLogo from '../src/components/LoginLogo';

storiesOf('LoginLogo', module).add('default', () => (<LoginLogo onGoogleLogin={action('onGoogleLogin')}/>));
