var InputBox = React.createClass({
  render: function() {
    return(
      <div>
      <InputDisplay />
      </div>
    );
  }
});

var InputDisplay = React.createClass({
  getInitialState: function(){
    return {display: "IT WILL SAY IT HERE!"};
  },

  render: function() {
    return(
      <div>
        {this.state.display}
      </div>

    );
  }
});


React.render(
  <InputBox />,
  document.getElementById('inputValue')
)
