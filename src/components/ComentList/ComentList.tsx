import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { fetchComments } from "../../store/actions";

function ComentList() {
  const posts = useSelector((state: RootState) => state.posts);

  return (
    <ul>
      {posts ? posts!.map(post => <li key={post.id}>{post.body}</li>) : ""}
    </ul>
  );
}

export default ComentList;
