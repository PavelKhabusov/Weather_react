import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/Weather';

const API_KEY = '';

class App extends React.Component {
  render() {
    return (
      <div class="mainContent">
        <Info />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;