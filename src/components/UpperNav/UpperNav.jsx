import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function UpperNav() {
  return (
      <ButtonGroup variant="text" aria-label="top-nav">
        <Button href="/animals">Animals</Button>
        <Button href="/animals">Projects</Button>
        <Button href="/animals">Cars</Button>
        <Button href="/animals">Pictures</Button>
      </ButtonGroup>
  );
}


export default UpperNav;
