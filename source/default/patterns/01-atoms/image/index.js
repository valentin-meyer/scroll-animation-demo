/**
 * image
 */

// Module template
import './image.twig';
import './_image--bg.twig';
import './_image--placeholder.twig';
import './_image--primary.twig';

import './dummy.png';

const patternDefinition = require('./image.wingsuit.yml');

export const name = 'image';

export const defaults = {
  patternDefinition,
};
