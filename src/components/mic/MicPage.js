import React from 'react';
import {Link} from 'react-router';

class MicPage extends React.Component {
     

  constructor(props, context) {
    super(props, context);
    this.micOnClick = this.micOnClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.buttonSvg = "button-svg";
  }

  
  componentDidMount() {
    this.button = document.getElementById('micButton');
    this.w = window;
  }


  micOnClick(){
    let vw = this.w.innerWidth;
    let vh = this.w.innerHeight;
    let bw = this.button.innerWidth;
    let bh = this.button.innerHeight;
    let s;
    if (vw > vh) {
      s = vw / bw * 1.5;
    } else {
      s = vh / bh * 1.5;
    }
    let scale = 'scale(' + s + ') translate(-50%,-50%)';
    return this.setState({buttonSvg: "button-svg-clicked"});
      // clone.css({
      //   transform: scale
      // });
      
      // mic.css({
      //   fill: 'rgba(0,0,0,0.2)',
      //   transform: 'scale(4)'
      // });
      
      // button.on('transitionend', function() {
      //   active.addClass('active');
      //   $(this).off('transitionend');
      // });
  }

  render() {
    return (
      <div className="wrapper">
      <div className="button-wrapper">
        <div className="button" onClick={this.micOnClick} id="micButton">
          <svg className={this.buttonSvg}  viewBox="0 0 24 24">
            <path d="M12 15c1.66 0 2.99-1.34 2.99-3l.01-6c0-1.66-1.34-3-3-3s-3 1.34-3 3v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1s-5.3-2.1-5.3-5.1h-1.7c0 3.42 2.72 6.23 6 6.72v3.28h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
            <path d="M0 0h24v24h-24z" fill="none"/>
          </svg>
        </div>
      </div>

    <div className="active-wrapper">
      <div className="stop-button">
        <svg className="stop-button-svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M6 6h12v12H6z"/>
        </svg>
      </div>
      <div className="dots">
        <div className="dots-col">
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
        </div>
        <div className="dots-col">
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
        </div>
        <div className="dots-col">
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
        </div>
        <div className="dots-col">
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
        </div>
        <div className="dots-col">
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
        </div>
        <div className="dots-col">
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
        </div>
        <div className="dots-col">
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
        </div>
        <div className="dots-col">
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
        </div>
        <div className="dots-col">
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
          <div className="dots-dot"></div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default MicPage;