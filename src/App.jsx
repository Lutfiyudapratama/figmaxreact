import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Vehicle from './components/Vehicle';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Form />
    <Vehicle />
    </>
  )
}

export default App;
