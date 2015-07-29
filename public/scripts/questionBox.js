var QuestionBox = React.createClass({
  getInitialState: function() {
    return {
      data:[
      {author: "Pete Hunt", text: "This is one comment"},
      {author: "Jordan Walke", text: "This is *another* comment"}
      ]
    };
  },

  createQuestion: function(input) {
    var authorInput = input[0];
    var questionInput = input[1];
    this.setState({
      data: this.state.data.concat({author: authorInput, text: questionInput})
    });
  },

  render: function(){
    return(
      <div className="questionBox">
        <QuestionForm createQuestion={this.createQuestion} />
        <p>Question Box</p>
        <QuestionList commentData={this.state.data} />
        {this.state.change} <br />
      </div>
    );
  }
});

var QuestionList = React.createClass({
  render: function() {
    var questionNodes =
      this.props.commentData.map(function(question){
        return(
          <div>
          <Question author={question.author} text={question.text} />
          </div>
        )
      });
    return(
      <div>
        <h1>Questions</h1>
          {questionNodes}
      </div>
    );
  }
});

var Question = React.createClass({
  render: function() {
    return(
      <div className="question">
        <h3 className="questionAuthor">
          {this.props.author}
        </h3>
        <p className="questionText">
          {this.props.text}
        </p>
      </div>
    );
  }
});

var QuestionForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.authorInput).value.trim();
    var question = React.findDOMNode(this.refs.questionInput).value.trim();
    this.props.createQuestion([author, question]);
  },
  render: function() {
    return(
      <div className="questionForm">
        <form onSubmit={this.handleSubmit}>
          <label>Question Author</label>
          <input type="text" ref="authorInput" /><br />
          <label>Whats your question?</label>
          <input type="text" ref="questionInput" />
          <input type="submit" value="Ask!"></input>
        </form>
      </div>
    );
  }
});

React.render(
<QuestionBox />,
  document.getElementById('questionBox')
)
