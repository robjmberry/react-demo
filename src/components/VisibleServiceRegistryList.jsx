import { connect } from 'react-redux'
import ServiceRegistryList from './ServiceRegistryList.jsx'

const mapStateToProps = (state) => {
  return {
    registrations: state.registrations
  }
}

const VisibleServiceRegistryList = connect(
  mapStateToProps
)(ServiceRegistryList)

export default VisibleServiceRegistryList
