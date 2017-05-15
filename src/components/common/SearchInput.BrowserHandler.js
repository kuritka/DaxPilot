import React, {PropTypes} from 'react';

const BrowserHandler = {
        edge: () => <div></div>,
        default: () =><button className="close-icon" type="reset"></button>
      };


export default BrowserHandler;      