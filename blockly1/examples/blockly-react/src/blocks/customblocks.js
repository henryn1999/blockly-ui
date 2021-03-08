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
 * @fileoverview Define custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks


import * as Blockly from 'blockly/core';
import moment from 'moment';

// Since we're using json to initialize the field, we'll need to import it.
import '../fields/BlocklyReactField';
import '../fields/DateField';

var testReactField = {
  "type": "test_react_field",
  "message0": "custom field %1",
  "args0": [
    {
      "type": "field_react_component",
      "name": "FIELD",
      "text": "Click me"
    },
  ],
};

Blockly.Blocks['test_react_field'] = {
  init: function() {
    this.jsonInit(testReactField);
    this.setStyle('statement_blocks');
  }
};

var reactDateField = {
  "type": "test_react_date_field",
  "message0": "DATE: %1",
  "args0": [
    {
      "type": "field_react_date",
      "name": "DATE",
      "date": "01/01/2020"
    },
  ],
"output": "String"
};
var today_date = {
  "type": "test_react_date_field",
  "message0": "TODAY %1",
  "args0": [
    {
      "type": "field_react_date",
      "name": "DATE",
      "date": moment().format("MM/DD/YYYY")
    },
  ],
"output": "String"
};
Blockly.Blocks['test_react_date_field'] = {
  init: function() {
    this.jsonInit(reactDateField);
    this.setStyle('variable_blocks');
    this.setColour("#EA5F5D");
  }
};
Blockly.Blocks['TODAY'] = {
  init: function() {
    this.jsonInit(today_date);
    this.setStyle('variable_blocks');
    this.setColour("#3381D2");
  }
};
Blockly.Blocks['sell'] = {
  init: function() {
    this.appendValueInput("price")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SELL");
    this.appendValueInput("AT")
        .setCheck("Number")
        .appendField("AT");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour("#6DB36E");
 this.setTooltip("Sell at this price");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wait");
    this.setPreviousStatement(true, null);
    this.setColour("#21759F");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['buy_at'] = {
  init: function() {
    this.appendValueInput("price")
        .setCheck("String")
        .appendField("BUY");
    this.appendValueInput("AT")
        .setCheck("Number")
        .appendField("AT");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour('#3381D2');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['open_on'] = {
  init: function() {
    this.appendValueInput("OPEN OF")
        .setCheck("String")
        .appendField("OPEN OF");
    this.appendValueInput("ON")
        .setCheck("String")
        .appendField("ON");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#EA5F5D");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['close_on'] = {
  init: function() {
    this.appendValueInput("CLOSE OF")
        .setCheck("String")
        .appendField("CLOSE OF");
    this.appendValueInput("ON")
        .setCheck("String")
        .appendField("ON");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#6DB36E");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['stock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("$Enter Stock"), "NAME");
    this.setOutput(true, null);
    this.setColour("#7D57C1");
 this.setTooltip("Enter Stock Name Here");
 this.setHelpUrl("");
  }
};
