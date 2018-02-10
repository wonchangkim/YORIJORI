import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import MyStorage from '../src/components/MyStorage';

storiesOf('MyStorage', module).add('default', () => (<MyStorage onGoogleLogin={action('onGoogleLogin')}/>));
