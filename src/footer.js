'use strict';

const middle = {
  textAlign: "center",
  marginTop: "4em"
}

class Footer extends React.Component {
  render() {
    return(
      <div style={middle}>
        <h5>CORPORATE OFFICE:</h5>
        <h6>158 Oba Olagbegi Avenue, Old Bodija, Off Oshuntokun Street, Ibadan Oyo State</h6>
        <h6>Tel: 08023441634, 08033237874 | Email: relationshippersonified@gmail.com</h6>
        <h6>Website: www.ipdcrm.org</h6>
      </div>
    );
  }
}

let domContainer = document.querySelector('#footer_container');
ReactDOM.render(<Footer />, domContainer);