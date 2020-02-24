import React, { Component } from 'react';
import Nav from './components/nav/index';
import Home from './containers/Home'
import Footer from './components/footer/footer'


class App extends Component {
  render() {
    
    return (
      <div>
        <Nav />
        <Home />
      <Footer/>

        {/* <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
              My header
           </TypoGraphy>
          </Toolbar>
        </AppBar> */}

      </div>
    );
  }
}
export default App;