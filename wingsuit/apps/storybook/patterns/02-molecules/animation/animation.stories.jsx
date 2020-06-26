import React from 'react';
import 'molecules/animation';
import { RenderTwig } from '@wingsuit-designsystem/storybook';
const animationTemplate = require('./animation.twig');

export default {
  title: 'Molecules/Animation',
};

export const Animation = () => <RenderTwig data={animationTemplate} />;
