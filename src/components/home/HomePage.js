import React from 'react';
import {Link} from 'react-router';


class HomePage extends React.Component {
     
  constructor(props, context) {
    super(props, context);
  }



  render() {
    return (
        <div id="home">
          <div id="layer1"></div>
          <div id="layer2"></div>
          <div id="layer3"></div>
          <h1>dax pilot</h1>
          <h2>Deutsche Börse</h2>
        </div>
    );
  }
}

export default HomePage;