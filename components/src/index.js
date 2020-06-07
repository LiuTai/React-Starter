import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
      <CommentDetail author="Sam" timeAgo="Today 1:32 PM" />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail author="Tod" timeAgo="Today 5:42 AM" />
    </ApprovalCard> 
    <ApprovalCard>
      <CommentDetail author="Jane" timeAgo="Today 2:32 PM" />
    </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("div"));
