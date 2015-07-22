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

  changeDisplay: function(e){
    e.preventDefault();
    var input = React.findDOMNode(this.refs.displayText).value.trim();
    this.setState({
      display: input
    });
  },

  render: function() {
    return(
      <div>
        {this.state.display}
        <div>
          <form className="inputForm" onSubmit={this.changeDisplay}>
            <input type="text" ref="displayText" />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
});


React.render(
  <InputBox />,
  document.getElementById('inputValue')
)
