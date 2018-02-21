import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import ResultModal from '../src/components/NewIngredients/ResultModal';

storiesOf('ResultModal', module).add('default', () => (<ResultModal onGoogleLogin={action('onGoogleLogin')}/>));
