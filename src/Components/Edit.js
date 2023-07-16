import React from 'react'
import { useState } from 'react'
import { Box,  styled } from '@mui/material';
import { CloseFullscreen } from '@mui/icons-material';
import '../App.css';

import { Controlled as ControlledEditor } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

const Container = styled(Box)`
flex-grow: 1;
flex-basic: 0;
display: flex;
flex-direction: column;
padding: 0 8px 8px;
`;

const Heading = styled(Box)`
background: #1d1e22;
display: flex;
color: white;
padding: 9px 12px;
`;

const Header = styled(Box)`
display:flex;
background:#060606;
color:#AAAEBC;
justify-content:space-between;
font-weight:700;
`;

const Edit = ({language, heading, icon, icon_color, value, onChange})  => {
      const [open, setOpen] = useState(true);

    function handleChange(editor, data, value)
    {
      onChange(value)
    }


  return (
    <Container style = {open?null : {flexGrow:0}}>
      <Header>
        <Heading>
            <Box component="span"
                 style={{
                    background: icon_color,
                    height: 20,
                    width: 20,
                    display: 'flex',
                    placeContent: 'center',
                    borderRadius: 5,
                    marginRight: 5,
                    paddingBottom: 2,
                    color:'#000'
                 }}
            >
                {icon}
            </Box>
            {heading}
        </Heading>
        <CloseFullscreen 
          fontSize="small"
          style={{alignSelf: 'center'}}
          onClick = {() => setOpen(prevstate => !prevstate)}
          />
      </Header>

      <ControlledEditor 
        className="controlled-editor"
        value = {value}
        onBeforeChange = {handleChange}
        options={{
            theme: 'material',
            lineNumbers: true,
            lineWrapping: true,
            lint: true,
            mode: language,
            indentUnit: 4,
        }}
      />
    </Container>
  )
} 

export default Edit;


