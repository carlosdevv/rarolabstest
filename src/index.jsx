import React, { useState } from "react";
import ReactDOM from "react-dom";
import TagsInput from "./TagsInput";
import Button from "@material-ui/core/Button";

function InputFieldWithChip() {
  const [emailList, setEmailList] = useState([]);
  const [isPressed, setIsPressed] = useState(false);

  function handleSelecetedTags(items) {
    setEmailList(items);
  }

  function handleShowEmails() {
    setIsPressed(true);
  }

  return (
    <div className="App">
      <TagsInput
        selectedTags={handleSelecetedTags}
        fullWidth
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
        emailList.map((item, index) => {
          return (
            <ul key={index}>
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
