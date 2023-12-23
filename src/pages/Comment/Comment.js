import React from "react";

 import MenuItem from './MenuItem/MenuItem'
 import CommentEdit from '././CommentEdit/CommentEdit'
 import CommentList from '././CommentList/CommentList'

const Comment = () => {
  return (
    <div>
        <MenuItem/>
        <CommentEdit/>
        <CommentList/>
    </div>
  );
};

export default Comment;