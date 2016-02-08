import React from 'react';
import ServiceRegistry from './ServiceRegistry.jsx'

const ServiceRegistryList = ({registrations}) =>  (
    <table>
    <thead>

    <th>Service</th>
    <th>App Id</th>
    <th>Server</th>
    <th>Port</th>
    <th>Last Heartbeat</th>
    </thead>
    { registrations.map((registry) =>
      <ServiceRegistry key={registry.Id} registry={registry} />
    )}
    </table>
  )


export default ServiceRegistryList;
