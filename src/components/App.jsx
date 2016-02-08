import React from 'react';
import ServiceRegistryList from './ServiceRegistryList.jsx'
import mydata from '../data/testdata';


const App = () =>(
  <ServiceRegistryList registrations={mydata}/>
)

export default App;
