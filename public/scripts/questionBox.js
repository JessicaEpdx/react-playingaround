var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

var QuestionBox = React.createClass({
  render: function(){
    return(
      <div className="questionBox">
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
          <Question author={question.author} text={question.text} />
        )
      });
    return(
      <div>
        <p>Question List</p>
          {questionNodes}
      </div>
    );
  }
});

var Question = React.createClass({
  render: function() {
    return(
      <div className="question">
        <p>Questions</p>
        <h3 className="questionAuthor">
        {this.props.author}
        </h3>
        {this.props.text}
      </div>
    );
  }
});

React.render(
<QuestionBox data={data} />,
  document.getElementById('questionBox')
)
