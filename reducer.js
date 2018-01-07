const defaultState = {
  counter: 0,
}

const reducer = (state = defaultState, action) => {
  switch (action) {
    case 'INC':
      return { counter: state.counter + 1 }
    case 'DEC':
      return { counter: state.counter - 1 }
    default:
      return state
  }
}

export { reducer }
