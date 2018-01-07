import React from 'react'
import PropTypes from 'prop-types'

class Comp extends React.Component {
  // this is the base component that has the store context available, you want to always extend all your components from Comp instead of React.Component to be able to render changes

  componentWillMount() {
    this.update = this.context.update
  }
}

Comp.contextTypes = {
  store:  PropTypes.object,
  update: PropTypes.func,
}

export { Comp }
