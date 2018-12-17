'use strict';

const middle = {
  textAlign: "center",
  marginTop: "4em"
}

class Footer extends React.Component {
  render() {
    return(
      <div style={middle}>
        <h4>CORPORATE OFFICE:</h4>
        <p>158 Oba Olagbegi Avenue, Old Bodija, Off Oshuntokun Street, Ibadan Oyo State</p>
        <p>Tel: 08023441634, 08033237874 | Email: relationshippersonified@gmail.com</p>
        <p>Website: www.ipdcrm.org</p>
      </div>
    );
  }
}

let domContainer = document.querySelector('#footer_container');
ReactDOM.render(<Footer />, domContainer);