import React from 'react'
import PropTypes from 'prop-types'

const Home = async () => {
  const { Comp }  = await import('./comp')

  class HomeComp extends Comp {
    render() {
      return (
        <div>
          <p>From child component: {this.context.store.counter}</p>
          <button onClick={() => this.update("INC")} >INC</button>
          <button onClick={() => this.update("DEC")} >DEC</button>
        </div>
      )
    }
  }

  Home.contextTypes = {
    store:  PropTypes.object,
    update: PropTypes.func,
  }

  return HomeComp
}

export { Home }
