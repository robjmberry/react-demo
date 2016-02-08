const registrations = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE_REGISTRATIONS":
      return action.registrations
    default:
      return state
  }
}

export default registrations
