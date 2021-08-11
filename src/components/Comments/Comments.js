import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  const changeHandler = event => {
    props.setComment(event.target.value);
  }

  return (
    <div>
      {comments.map(item => {
      return <Comment key={item.id} comment={item} />
    })}
          {/* <input
          type="text"
          placeholder="Comment Here"
          onChange={changeHandler}
        /> */}
      {/* map through the comments prop and render a Comment for every piece of data */}
    </div>
  );
};

export default Comments;
