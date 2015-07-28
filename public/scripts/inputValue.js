var InputBox = React.createClass({
  getInitialState: function(){
    return {autoDisplay: "Auto Updated Text Here"};
  },

  changeAutoDisplay: function(event) {
    this.setState({
      autoDisplay: event.target.value
    })
  },

  render: function() {
    return(
      <div>
        <InputSubmit />
        <InputAutoUpdate autoDisplay={this.state.autoDisplay} changeAutoDisplay={this.changeAutoDisplay}/>
      </div>
    );
  }
});

var InputSubmit = React.createClass({
  getInitialState: function(){
    return {display: "Submitted Text Here"};
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

var InputAutoUpdate = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.autoDisplay}
        <br />
        <input type="text" onChange={this.props.changeAutoDisplay} />
      </div>
    )
  }

})

React.render(
  <InputBox />,
  document.getElementById('inputValue')
)
