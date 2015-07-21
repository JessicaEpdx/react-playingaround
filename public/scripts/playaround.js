var SayHello = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.text}
      </div>
    );
  }
});

var HelloWorld = React.createClass({
  render: function() {
    return(
      <SayHello text="Hey!" />
    );
  }
});

React.render(
  <HelloWorld />,
  document.body
)
