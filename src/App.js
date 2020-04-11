import React from 'react';
import './App.css';
import routes from './routes'
import Nav from './components/Nav'

const App = () => {
  return (
    <div >
        <div>
          <Nav/>
          {routes}
       
        </div>
      </div>
  );
}

export default App;
