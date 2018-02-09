import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import LogintapScreen from '../src/components/LogintapScreen';

storiesOf('LogintapScreen', module).add('default', () => (<LogintapScreen onGoogleLogin={action('onGoogleLogin')}/>));
