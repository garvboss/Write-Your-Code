import React from 'react';
import Edit from './Edit.js';
import {Box, styled} from '@mui/material';
import { useContext } from 'react';
import { DataContext } from '../Context/DataProvider.js';

 const Container = styled(Box)`
    display:flex;
    background-color: #060606;
    height:50vh;
    `;

const Code = () => {

  const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext);
        
  return (
    <Container>
      <Edit
        language="xml"
        heading="HTML"
        icon="/"
        icon_color="#FF3C41"
        value={html}
        onChange={setHtml}
     />
      <Edit
        language="css"
        heading="CSS" 
        icon="*"
        icon_color="#0EBEFF"
        value={css}
        onChange={setCss}
     />
      <Edit 
        language="javascript"
        heading="JS"
        icon="( )"
        icon_color="#FCD000"
        value={js}
        onChange={setJs}
     />
    </Container>
  )
}

export default Code;
