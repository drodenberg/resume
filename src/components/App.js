import React, { Component } from 'react';
import Sidebar from './Sidebar';
import About from './About';
import WorkHistory from './WorkHistory';
import SelfStudy from './SelfStudy';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Sidebar />

          <section className="resume">
            <About />
            <WorkHistory />
            <SelfStudy />
          </section>
        </div>
      </div>
    )
  }
}

export default App;
