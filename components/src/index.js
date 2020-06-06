import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail"

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today 1:32 PM"/>
      <CommentDetail author="Tod" timeAgo="Today 5:42 AM"/>
      <CommentDetail author="Jane" timeAgo="Today 2:32 PM"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("div"));
