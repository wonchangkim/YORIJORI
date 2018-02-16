import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Dimmer from '../src/components/common/Dimmer';

storiesOf('Dimmer', module).add('default', () => (<Dimmer onGoogleLogin={action('onGoogleLogin')}/>));
