import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }

   body {
    font: 400 16px Roboto, sans-serif;
   }

   body, input, button, textarea {
      font: 400 16px Roboto, sans-serif;       
   }

   textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
   } 
`
