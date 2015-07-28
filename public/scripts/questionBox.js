var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

var QuestionBox = React.createClass({
  createQuestion: function(event) {
    event.preventDefault();

  },

  render: function(){
    return(
      <div className="questionBox">
        <QuestionForm createQuestion={this.createQuestion }/>
        <p>Question Box</p>
        <QuestionList data={this.props.data}/>
      </div>
    );
  }
});

var QuestionList = React.createClass({
  render: function() {
    var questionNodes =
      this.props.data.map(function(question){
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
  render: function() {
    return(
      <div className="questionForm">
        <form onSubmit={this.props.createQuestion}>
          <label>Question Author</label>
          <input type="text" ref="authorInput"/>
          <br />
          <label>What is your question?</label>
          <input type="text" ref="textInput"/>
          <button type="submit">Ask!</button>
        </form>
      </div>
    );
  }
});

React.render(
<QuestionBox data={data} />,
  document.getElementById('questionBox')
)
