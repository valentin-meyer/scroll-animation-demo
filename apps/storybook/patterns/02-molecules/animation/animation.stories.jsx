import React from 'react';
import 'molecules/animation';
import { RenderTwig } from '@wingsuit-designsystem/storybook';
const animationTemplate = require('./animation.twig');
const animation2Template = require('./animation-2.twig')

export default {
  title: 'Molecules/Animation',
};

export const Animation = () => <RenderTwig data={animationTemplate} />;

export const Animation2 = () => <RenderTwig data={animation2Template} />;
