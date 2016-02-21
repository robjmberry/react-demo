import React from 'react';
import VisibleServiceRegistryList from './VisibleServiceRegistryList.jsx'
import {Navbar} from 'react-bootstrap'

const App = () =>(
  <div>
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>Demo</Navbar.Brand>
    </Navbar.Header>
  </Navbar>
  <VisibleServiceRegistryList />
  </div>
)

export default App;
