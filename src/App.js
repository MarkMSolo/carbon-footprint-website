import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import "@cloudscape-design/global-styles/index.css";

import {Input, Button} from "@cloudscape-design/components";

function App() {

  const [value, setValue] = useState("google.com");

  const calcCarbonFootprint = (searchTerm) => {
    axios({
      method: 'get',
      url: `https://api.websitecarbon.com/site?url=${searchTerm}`,
    })
      .then(function (response) {
        console.log(response);
      });
  }

  return (
    <div className="App">
      <Input
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
    />
    <Button onClick={calcCarbonFootprint(value)} 
    variant="primary">Calculate website carbon footprint</Button>
    </div>
  );
}

export default App;
