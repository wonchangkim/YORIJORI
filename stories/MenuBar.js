import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import MenuBar from '../src/components/Navigation/MenuBar';

storiesOf('MenuBar', module).add('default', () => (<MenuBar onGoogleLogin={action('onGoogleLogin')}/>));
