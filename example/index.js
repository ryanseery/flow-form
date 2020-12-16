import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FlowForm, Field } from 'flow-form';

function checkString(e) {
  return !e.target.value || !e.target.value.length;
};

const options = [
  { value: 'volvo', name: 'Volvo' },
  { value: 'saab', name: 'Saab' },
  { value: 'mercedes', name: 'Mercedes' },
  { value: 'audi', name: 'Audi' },
];

function App() {

  const handleSubmit = (data) => {
    console.log('onSubmit: ', data);
  };

  return (
    <div className="container">
      <FlowForm onSubmit={handleSubmit} showData initialValues={{
        initial: 'default'
      }}>

        <Field type="text" validation={checkString}>
          Validation
        </Field>

        <Field type="text" name='Title' />

        <Field type="text">
          Initial
        </Field>

        <Field type="number" required>
          Number
        </Field>

        <Field type="select" name="Cars" id="cars">
          <option disabled defaultValue=""></option>
          {options.map(option => (
            <option key={option.name} value={option.value}>
              {option.name}
            </option>
          ))}
        </Field>

        <Field type="textarea">Text Area</Field>

        <Field type="drag-drop" placeholder="Drag and drop or click to select">Drag and Drop</Field>

        <Field type="radio" name="Radio" />

        <Field type="checkbox" name="Checkbox" />

      </FlowForm>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
