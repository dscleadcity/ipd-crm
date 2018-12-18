'use strict';

const middle = {
  textAlign: "center",
  margin: "4em 0.5em 2.5em 0.5em"
}

class Footer extends React.Component {
  render() {
    return(
      <div style={middle}>
        <hr />
        <h5><b><em>CORPORATE OFFICE:</em></b></h5>
        <h6>158 Oba Olagbegi Avenue, Old Bodija, Off Oshuntokun Street, Ibadan Oyo State</h6>
        <h6>Tel: 08023441634, 08033237874 | Email: relationshippersonified@gmail.com</h6>
        <h6>Website: www.ipdcrm.org</h6>
      </div>
    );
  }
}

let domContainer = document.querySelector('#footer_container');
ReactDOM.render(<Footer />, domContainer);