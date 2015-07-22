
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
    return {
      buttonText: "If you click me I'll tell you a secret!"};
      message: ""
  },

  changeText: function() {
    this.setState ({
      buttonText: "I'm a liar.",
      message: "I swear!"
    });
  },

  render: function() {
    return(
      <div>
        <button onClick={this.changeText}>
          {this.state.buttonText}
        </button>
        <div className="message">
          {this.state.message}
        </div>
      </div>
    );
  }
});

React.render(
  <HelloWorld />,
  document.body
)
