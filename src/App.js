import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import "@cloudscape-design/global-styles/index.css";

import {Input, Button, Box} from "@cloudscape-design/components";

function App() {

  const [value, setValue] = useState("google.com");
  const [resp, setResp] = useState({
    bytes: 0,
    cleanerThan: 0,
    green: false,
    rating: "N/A"
  });

  const calcCarbonFootprint = (searchTerm) => {
      axios.get(`https://api.websitecarbon.com/site?url=${searchTerm}`)
    .then((res) => {
      console.log(res);
      setResp(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <Input
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
    />
    <Button onClick={calcCarbonFootprint(value)} 
    variant="primary">Calculate website carbon footprint</Button>
    <Box>
      Bytes: {resp.bytes} 

      Cleaner Than: {resp.cleanerThan}
      Green: {resp.green}
      Rating: {resp.rating}
    </Box>
    
    </div>
  );
}

export default App;
