'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var middle = {
  textAlign: "center",
  margin: "4em 0.5em 2.5em 0.5em"
};

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { style: middle },
        React.createElement("hr", null),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "b",
            null,
            React.createElement(
              "em",
              null,
              "CORPORATE OFFICE:"
            )
          )
        ),
        React.createElement(
          "h6",
          null,
          "158 Oba Olagbegi Avenue, Old Bodija, Off Oshuntokun Street, Ibadan Oyo State"
        ),
        React.createElement(
          "h6",
          null,
          "Tel: 08023441634, 08033237874 | Email: relationshippersonified@gmail.com"
        ),
        React.createElement(
          "h6",
          null,
          "Website: www.ipdcrm.org"
        )
      );
    }
  }]);

  return Footer;
}(React.Component);

var domContainer = document.querySelector('#footer_container');
ReactDOM.render(React.createElement(Footer, null), domContainer);