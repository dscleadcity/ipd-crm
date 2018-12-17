'use strict';

class Footer extends React.Component {
  render() {
    return(
      <div>
        <p>footer</p>
      </div>
    );
  }
}

const domContainer = document.querySelector('#footer');
ReactDOM.render(e(Footer), domContainer);