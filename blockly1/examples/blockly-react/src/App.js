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
 * @fileoverview Main React component that includes the Blockly component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import React, { useState } from 'react';
import './App.css';

import logo from './logo.svg';
import Basic from "./Basic";
import BlocklyComponent, { Block, Value, Field, Shadow} from './Blockly';
import { ChakraProvider } from '@chakra-ui/react';
import BlocklyPython from 'blockly/python';
import { Pre } from "./styles";
import * as polished from 'polished';
import './blocks/customblocks';
import './generator/generator';
import Blockly from 'blockly';
import CodeEditor from "./CodeEditor";
import Highlight, { defaultProps } from "prism-react-renderer";
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import LiveEdit from './LiveEdit';
import styled from 'styled-components';
var code1 = "code will appear here";
const scope = {styled};
const StyledEditor = styled(LiveEditor)`
  background: #1A365D;
`;
Blockly.Themes.Stocks = Blockly.Theme.defineTheme('stocks', {
  'componentStyles': {
    'workspaceBackgroundColour': '#2C3D50',
    'toolboxBackgroundColour': '#2276A0',
    'flyoutBackgroundColour': '#252526',
    'flyoutForegroundColour': '#ccc',
    'flyoutOpacity': 1,
    'scrollbarColour': '#CA774A',
    'insertionMarkerColour': '#fff',
    'insertionMarkerOpacity': 0.3,
    'scrollbarOpacity': 1,
    'cursorColour': '#d0d0d0',
  },
  'blockStyles':{
    "colour_blocks": {
      "colourPrimary": "20"
    },
    "list_blocks": {
      "colourPrimary": "260"
    },
    "logic_blocks": {
      "colourPrimary": "#3381D2"
    },
    "loop_blocks": {
      "colourPrimary": "#EA5F5D"
    },
    "math_blocks": {
      "colourPrimary": "#6DB36E"
    },
    "procedure_blocks": {
      "colourPrimary": "290"
    },
    "text_blocks": {
      "colourPrimary": "160"
    },
    "variable_blocks": {
      "colourPrimary": "#FB981C"
    },
    "variable_dynamic_blocks": {
      "colourPrimary": "#7D57C1"
    },
    "hat_blocks": {
      "colourPrimary": "#E91F63",
      "hat": "cap"
    }
  }
});

const Container = styled.div`
  margin: 0 auto;
  max-width: 100%;
  width: ${polished.rem(1024)};
  padding: ${polished.rem(20)};
  padding-bottom: ${polished.rem(100)};
  text-align: center;
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
    this.state = {message: code1}
  }
  updateCode = () => {
      code1 = BlocklyPython.workspaceToCode(
      this.simpleWorkspace.current.workspace
    );
    this.setState({ message: code1});
    console.log(code1);
  }
  render() {
    return (
      <>
      <div className="App">
      <div id="blocklyDiv" style={{height: '200%', width: '60%'}}>
          <BlocklyComponent ref={this.simpleWorkspace}
          readOnly={false} trashcan={true} media={'media/'}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true
          }}
          theme={Blockly.Themes.Stocks}
          initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="controls_ifelse" x="0" y="0"></block>
</xml>
      `}>
            <Block type="sell"/>
            <Block type="buy_at"/>
            <Block type="math_number">
              <field name="NUM">123</field>
            </Block>
            <Block type="stock" />
            <Block type="TODAY" />
            <Block type="test_react_date_field" />
            <Block type="controls_ifelse" />
            <Block type="logic_compare" />
            <Block type="logic_operation" />
            <Block type="open_on" />
            <Block type="close_on" />
            <Block type="math_arithmetic"></Block>
            <Block type="controls_repeat_ext">
              <Value name="TIMES">
                <Shadow type="math_number">
                  <Field name="NUM">10</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="wait" />
            <Block type="logic_negate" />
            <Block type="logic_boolean" />
          </BlocklyComponent>
          </div>
          <div id="code_chunk "style={{float:"right",height: '200%', width: '40%'}}>
            <button onClick={this.updateCode}>Convert</button>
            <LiveEdit noInline code={this.state.message} />
          </div>
      </div>
      </>
    );
  }
}

export default App;
