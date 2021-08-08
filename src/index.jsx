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

      {/* Chequei no console.log e a lista está atualizando normalmente, porém
      parece que o .map buga quando insiro email's no input utilizando ";" e nao
      renderiza na tela os email's, só quando aperto no botão novamente ou apago
      ou insiro um novo email sem utilizar o ";". É estranho por que os emails
      estão na lista, ele so nao renderiza na hora. Enfim, não consegui solucionar
      esse bug :(
       */}
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
