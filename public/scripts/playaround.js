var HelloWorld = React.createClass({
  render: function() {
    return(
      <div>Hey!</div>
    );
  }
});

React.render(
  <HelloWorld />,
  document.body
)
