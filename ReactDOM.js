var React = require('react');
var ReactDOM = require('react-dom');

function makeDoggy (e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

var kitty = (
	<img 
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty" onClick={makeDoggy}/>
);

ReactDOM.render(kitty,document.getElementById('app'));

// including if/else statement

var React = require('react');
var ReactDOM = require('react-dom');

if (user.age >= drinkingAge) {
  var message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  var message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);

// react .map
var React = require('react');
var ReactDOM = require('react-dom');

var people = ['Rowe', 'Prevost', 'Gare'];

var peopleLIs = people.map(function(person, i){
  // return statement goes here:
  return <li key={'person_' + i}>{person}</li>;

});

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLIs}</ul>,document.getElementById('app'));
		
// React Components
var React = require('react');
var ReactDOM = require('react-dom');

var MyComponentClass = React.createClass({
  render: function () {
    return <h1>Hello world</h1>;
  }
});

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);

// react object.. class
var React = require('react');
var ReactDOM = require('react-dom');

var QuoteMaker = React.createClass({
  render: function () {
    return (
      <blockquote>
        <p>
          The world is full of objects, more or less interesting; I do not wish to add any more.
        </p>
        <cite>
          <a target="_blank"
            href="http://bit.ly/1WGzM4G">
            Douglas Huebler
          </a>
        </cite>
      </blockquote>
    );
  }
});

ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('app')
);

var React = require('react');

var NavBar = React.createClass({
  render: function () {
    var pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    var navLinks = pages.map(function(page){
      return (
        <a href={'/' + page}>
          {page}
        </a>
      );
    });

    return <nav>{navLinks}</nav>;
  }
});

module.exports = NavBar;

// component interaction
var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar');


var ProfilePage = React.createClass({
  render: function () {
    return (
      <div>
				<NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
});

// this.props
var React = require('react');
var ReactDOM = require('react-dom');

var Greeting = React.createClass({
  render: function () {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
});

// ReactDOM.render goes here:
ReactDOM.render(
  <Greeting firstName='Luke' />, 
  document.getElementById('app')
);
