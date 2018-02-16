import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Camera from '../src/components/Camera';

storiesOf('Camera', module).add('default', () => (<Camera onGoogleLogin={action('onGoogleLogin')} />));
