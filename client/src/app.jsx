import React from 'react';
import ReactDom from 'react-dom';

// original string
ReactDom.render(<h1>Hello from React</h1>, document.getElementById('react-app'));

// transformed string
ReactDom.render(React.createElement('h1', null, 'Hello from React'), document.getElementById('react-app'));