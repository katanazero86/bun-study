const {
 name,
 hi
} = require('./cjs.cjs');

import {hi as him, name as namem} from './mjs.mjs';

hi(name);

him(namem);