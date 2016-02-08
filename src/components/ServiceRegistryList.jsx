import React from 'react';
import ServiceRegistry from './ServiceRegistry.jsx'

const ServiceRegistryList = ({registrations}) =>  (
    <table>
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
    </table>
  )


export default ServiceRegistryList;
