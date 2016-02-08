import React from 'react'

const ServiceRegistry = ({registry}) =>  (
    <tr>
    <td>{registry.Service}</td>
    <td>{registry.AppId}</td>
    <td>{registry.Server}</td>
    <td>{registry.Port}</td>
    <td>{registry.LastHeartBeatSeconds}</td>
    </tr>
  )

export default ServiceRegistry;
