import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './ui/Header'
import theme from './ui/Theme'

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={() => <div>Home</div>} />
          <Route exact path='/services' component={() => <div>Services</div>} />
          <Route
            exact
            path='/customsoftware'
            component={() => <div>Custom Software</div>}
          />
          <Route
            exact
            path='/mobileapps'
            component={() => <div>Mobile Apps</div>}
          />
          <Route exact path='/websites' component={() => <div>Websites</div>} />
          <Route
            exact
            path='/revolution'
            component={() => <div>The Revolution</div>}
          />
          <Route exact path='/about' component={() => <div>About us</div>} />
          <Route
            exact
            path='/contact'
            component={() => <div>Contact Us</div>}
          />
          <Route exact path='/estimate' component={() => <div>Estimate</div>} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

export default App
