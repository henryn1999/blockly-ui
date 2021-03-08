/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Define generation methods for custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on generating code:
// https://developers.google.com/blockly/guides/create-custom-blocks/generating-code

import * as Blockly from 'blockly/core';
import 'blockly/python';
function convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
}
Blockly.Python['sell'] = function(block) {
  var value_price = Blockly.Python.valueToCode(block, 'price', Blockly.Python.ORDER_ATOMIC);
  var value_at = Blockly.Python.valueToCode(block, 'AT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'sell('+value_price+','+value_at.toString()+')\n';
  return code;
};

Blockly.Python['buy_at'] = function(block) {
  var value_price = Blockly.Python.valueToCode(block, 'price', Blockly.Python.ORDER_ATOMIC);
  var value_at = Blockly.Python.valueToCode(block, 'AT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'buy('+value_price+','+value_at.toString()+')\n';
  return code;
};
Blockly.Python['stock'] = function(block) {
  // Text value.
  var code = block.getFieldValue('NAME');
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['test_react_date_field'] = function(block) {
  // Text value.
  var code = block.getFieldValue('DATE');
  return [convertDate(code), Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['TODAY'] = function(block) {
  // Text value.
  var code = block.getFieldValue('DATE');
  return [convertDate(code), Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['open_on'] = function(block) {
  var value_open_of = Blockly.Python.valueToCode(block, 'OPEN OF', Blockly.Python.ORDER_ATOMIC);
  var value_on = Blockly.Python.valueToCode(block, 'ON', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'OPEN_OF('+value_open_of+').ON('+value_on+')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['close_on'] = function(block) {
  var value_open_of = Blockly.Python.valueToCode(block, 'CLOSE OF', Blockly.Python.ORDER_ATOMIC);
  var value_on = Blockly.Python.valueToCode(block, 'ON', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'CLOSE_OF('+value_open_of+').ON('+value_on+')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['wait'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'pass\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
