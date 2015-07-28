var CommentHolder = React.createClass({
  render: function(){
    return(
      <div>
        <p>Comment Holder</p>
        <CommentList />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return(
      <div>
        <p>Comment List</p>
        <Comment />
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return(
      <div>
        <p>Comment</p>
      </div>
    );
  }
});

React.render(
  <CommentHolder />,
  document.getElementById('commentHolder')
)
