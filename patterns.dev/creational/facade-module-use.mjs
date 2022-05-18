/**
 * We are using mjs to make import/export work.
 */

import module from './facade.mjs';
// Outputs: "current value: 10" and "running"
module.facade({
  run: true,
  val: 10,
});