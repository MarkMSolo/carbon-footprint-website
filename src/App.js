import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import "@cloudscape-design/global-styles/index.css";

import {Input, Button} from "@cloudscape-design/components";

function App() {
  const [value, setValue] = useState("google.com");
  return (
    <div className="App">
      <Input
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
    />
    <Button variant="primary">Calculate website Carbon footprint</Button>
    </div>
  );
}

export default App;
