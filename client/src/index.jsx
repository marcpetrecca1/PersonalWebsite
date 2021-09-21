import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <Navbar/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));