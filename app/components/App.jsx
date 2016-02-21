import React from 'react';
import VisibleServiceRegistryList from './VisibleServiceRegistryList.jsx'
import {Navbar} from 'react-bootstrap'
import {PageHeader} from 'react-bootstrap'

const App = () =>(
  <div>
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>Demo</Navbar.Brand>
    </Navbar.Header>
  </Navbar>
  <PageHeader>Service registrations</PageHeader>
  <VisibleServiceRegistryList />
  </div>
)

export default App;
