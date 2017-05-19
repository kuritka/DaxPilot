import React from 'react';
import { browserHistory, Link} from 'react-router';


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
          
              <div>
                <div className="flex-row flex-row--align-h-center">
                  <h1>dax pilot</h1>
                </div>
                <div className="flex-row flex-row--align-h-center">
                  <div><h2>Deutsche Börse</h2></div>
                </div>
                <div className="flex-row flex-row--align-h-center">
                  <div className="start-here-button overlay" onClick={function() {browserHistory.push('/isins')}}>Start here</div>
                </div>
              </div>
         
        </div>
    );
  }
}

export default HomePage;