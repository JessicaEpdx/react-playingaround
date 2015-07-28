var CommentHolder = React.createClass({
  render: function(){
    return(
      <div>
        <p>Comment Holder</p>
      </div>

    )
  }
})

React.render(
  <CommentHolder />,
  document.getElementById('commentHolder')
)
