var SayHello = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.text}
      </div>
    );
  }
});

var AddButton = React.createClass({
  render: function() {
    return(
      <button>
        {this.props.buttonText}
      </button>
    );
  }
});

var HelloWorld = React.createClass({
  render: function() {
    return(
      <div class="helloWorld">
        <SayHello text="Hey!" />
        <AddButton buttonText="Click me!" />
      </div>
    );
  }
});

React.render(
  <HelloWorld />,
  document.body
)
