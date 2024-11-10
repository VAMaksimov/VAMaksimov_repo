import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const LengthConversionForm = () => {
  const [value, setValue] = React.useState('');
  const [from, setFrom] = React.useState('m');
  const [to, setTo] = React.useState('m');
  
  function feetToMeters(feet) { return feet * 0.3048; }
  
  function milesToMeters(miles) { return miles * 1609.34; }
  
  function metersToFeet(meters) { return meters * 3.28084; }
  
  function metersToMiles(meters) { return meters * 0.000621371; }

  const handleConvert = (event) => {
    event.preventDefault();

    let result = value;
    switch (from) {
      case 'ml':
        result = milesToMeters(result);
        break;
    
      case 'ft':
        result = feetToMeters(result);
        break;
    }
    
    switch (to) {
      case 'ml':
        result = metersToMiles(result);
        break;
    
      case 'ft':
        result = metersToFeet(result);
        break;
    }
    const resultElement = document.getElementById('result-text');
    const resultText = `${value} ${from} = ${(Math.round(result * 100) / 100).toFixed(2)} ${to}`;
    resultElement.textContent = resultText;
  };

  return (
    <Box component="form" noValidate onSubmit={handleConvert}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TextField
        id="value"
        type="number"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        required
      />
      <Select
        id="from"
        value={from}
        onChange={(event) => setFrom(event.target.value)}
      >
        <MenuItem value="m">Meters</MenuItem>
        <MenuItem value="ml">Miles</MenuItem>
        <MenuItem value="ft">Feet</MenuItem>
      </Select>
      <Select
        id="to"
        value={to}
        onChange={(event) => setTo(event.target.value)}
      >
        <MenuItem value="m">Meters</MenuItem>
        <MenuItem value="ft">Feet</MenuItem>
        <MenuItem value="ml">Miles</MenuItem>
      </Select>
      <Button type="submit">Convert</Button>
      <Typography id="result-text"></Typography>
    </Box>
  );
};

export default LengthConversionForm;