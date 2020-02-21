import React from 'react';
import { Form, Input } from 'flow-form';
import './App.css';

function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Form onSubmit={data => console.log('data: ', data)}>
        <Input>Test</Input>
        <Input type="number">Number</Input>
      </Form>
    </div>
  );
}

export default App;
