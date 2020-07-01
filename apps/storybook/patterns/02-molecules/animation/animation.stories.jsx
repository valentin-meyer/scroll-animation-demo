import React from 'react';
import 'molecules/animation';
import { RenderTwig } from '@wingsuit-designsystem/storybook';
const animationTemplate = require('./animation.twig');
const animation2Template = require('./animation-2.twig');
const animation3Template = require('./animation-3.twig');
const animation4Template = require('./animation-4.twig');

export default {
  title: 'Molecules/Animation',
};

export const Animation = () => <RenderTwig data={animationTemplate} />;

export const Animation2 = () => <RenderTwig data={animation2Template} />;

export const Animation3 = () => <RenderTwig data={animation3Template} />;

export const Animation4 = () => <RenderTwig data={animation4Template} />;
