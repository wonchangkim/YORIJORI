import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import PlateUi from '../src/components/common/PlateUi';

storiesOf('PlateUi', module).add('default', () => (<PlateUi onGoogleLogin={action('onGoogleLogin')}/>));
