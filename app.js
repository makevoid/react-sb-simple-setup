import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const main = async () => {
  const { reducer } = await import('./reducer')
  const { Home }    = await import('./home')
  const HomeComp    = await Home()

  class App extends React.Component {

    constructor(props, context) {
      super(props)
      this.appComp = true
      this.state = reducer(undefined, undefined)
    }

    update(action) {
      App.setState(state => reducer(state, action))
    }

    getChildContext() {
      return {
        store: this.state,
        update: this.update,
      }
    }

    componentWillMount() {
      App.setState = this.setState.bind(this)
    }

    render() {
      return (
        <div>
          <HomeComp />
          <p>From main component: {this.state.counter}</p>
          <button onClick={() => this.update("INC")} >INC</button>
          <button onClick={() => this.update("DEC")} >DEC</button>
        </div>
      )
    }
  }

  App.childContextTypes = {
    store:  PropTypes.object,
    update: PropTypes.func,
  }

  ReactDOM.render(
    <App />,
    document.querySelector('.root')
  )
}

main()
