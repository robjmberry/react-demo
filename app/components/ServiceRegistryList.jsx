import React from 'react';
import ServiceRegistry from './ServiceRegistry.jsx'
import {Table} from 'react-bootstrap'

const ServiceRegistryList = ({registrations}) =>  (
    <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>Service</th>
        <th>App Id</th>
        <th>Server</th>
        <th>Port</th>
        <th>Last Heartbeat</th>
      </tr>
    </thead>
    <tbody>
    { registrations.map((registry) =>
      <ServiceRegistry key={registry.Id} registry={registry} />
    )}
    </tbody>
    </Table>
  )


export default ServiceRegistryList;
