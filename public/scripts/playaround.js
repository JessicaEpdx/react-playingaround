
var HelloWorld = React.createClass({
  render: function() {
    return(
      <div class="helloWorld">
        <SayHello text="Hey!" />
        <AddButton />
      </div>
    );
  }
});

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
  getInitialState: function() {
    return {buttonText: "Click me!"};
  },

  changeText: function() {
    this.setState ({
      buttonText: "Way to go!"
    });
  },

  render: function() {
    return(
      <button onClick={this.changeText}>
        {this.state.buttonText}
      </button>
    );
  }
});

React.render(
  <HelloWorld />,
  document.body
)
