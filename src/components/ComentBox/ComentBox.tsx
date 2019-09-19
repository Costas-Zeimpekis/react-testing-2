import React, { useState } from "react";
import { useDispatch } from "react-redux";

import * as Actions from "../../store/actions";

const ComentBox: React.FC = () => {
  const [newTxt, setNextText] = useState("");

  const disptach = useDispatch();

  function handleTextareChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setNextText(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    disptach(Actions.saveComment(newTxt));
    setNextText("");
  }

  function handleFetch() {
    disptach(Actions.fetchComments());
  }

  return (
    <div>
      <form id="submitForm" onSubmit={handleSubmit}>
        <h2>Enter a Comment</h2>
        <textarea
          className="textAreaInput"
          cols={20}
          rows={15}
          value={newTxt}
          onChange={handleTextareChange}
        />
        <button>Create</button>
        <button type="button" onClick={handleFetch}>
          Fetch
        </button>
      </form>
    </div>
  );
};

export default ComentBox;
