import React, { useEffect, useState, useReducer } from "react";
import ReactDOM from "react-dom";
import TagsInput from "./TagsInput";
import Button from "@material-ui/core/Button";

function InputFieldWithChip() {
  const [emailList, setEmailList] = useState([]);
  const [isPressed, setIsPressed] = useState(false);

  function handleSelecetedTags(items) {
    setEmailList(items);
    console.log("emailList:" + emailList);
  }

  function handleShowEmails() {
    setIsPressed(!isPressed);
  }

  return (
    <div className="App">
      <TagsInput
        selectedTags={handleSelecetedTags}
        variant="outlined"
        id="tags"
        name="emails"
        placeholder="add emails"
        label="emails"
        type="email"
      />
      <br />
      <Button variant="contained" onClick={() => handleShowEmails()}>
        Show Emails
      </Button>

      {emailList && isPressed ? (
        emailList.map((item) => {
          return (
            <ul key={item}>
              <li>{item}</li>
            </ul>
          );
        })
      ) : (
        <div />
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<InputFieldWithChip />, rootElement);
