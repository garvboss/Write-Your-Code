import React from 'react'
import { useEffect, useState } from 'react'

import { Box, styled } from '@mui/material'
import { useContext } from 'react'

import { DataContext } from '../Context/DataProvider'

const Container = styled(Box)`
margin-top:1.8em;
padding:1px;
height:33vh;
`;

function Result() {

    const [src, setSrc] = useState('')

    const {html, css, js} = useContext(DataContext)

      useEffect(() => {

       const timeout = setTimeout(() => {
            setSrc(`
            <html>
              <body>${html}</body>
              <style>${css}</style>
              <script>${js}</script>
            </html>
            `)
        }, 1000)

        return () => clearTimeout(timeout)

      }, [html, css, js])

  return (
    <Container>
      <iframe 
        srcDoc = {src}
        title = "output"
        sandbox = 'allow-scripts'
        width="100%"
        height="100%"
        frameBorder="0"
      />
    </Container>
  )
}

export default Result
