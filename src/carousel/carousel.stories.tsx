import React from 'react';

import { storiesOf } from '@storybook/react';

import Carousel from './carousel.component';

storiesOf('Carousel', module)
    .add('default', () => (
        <Carousel />
    ));
