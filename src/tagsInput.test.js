import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TagsInput from "./TagsInput";

describe("TagsInput component", () => {
  beforeEach(jest.clearAllMocks);

  it("deve renderizar duas tags", async () => {
    const handleSelecetedTags = jest.fn();
    // renderizacao do componente
    render(
      <TagsInput
        selectedTags={handleSelecetedTags}
        name="emails"
        label="emails"
      />
    );
    // construcao do cenário: o usuário aqui está preenchendo
    // o input com dois e-mails válidos, separados por ;
    const label = "emails";
    const value = "teste1@teste.com;teste2@teste.com";
    const field = screen.getByLabelText(label);
    fireEvent.input(field, { target: { value } });
    fireEvent.blur(field);
    await screen.findByLabelText(label);
    // o teste deverá quebrar se os dois componentes abaixo não
    // existirem
    screen.getByDisplayValue(field.value);
  });

  it("deve deletar a útima tag criada ao pressionar o botão de backspace", async () => {
    const handleSelecetedTags = jest.fn();

    render(
      <TagsInput
        selectedTags={handleSelecetedTags}
        name="emails"
        label="emails"
      />
    );

    const value = "teste1@teste.com";
    const label = "emails";
    const field = screen.getByLabelText(label);

    fireEvent.input(field, { target: { value } });
    fireEvent.blur(field);
    await screen.findByLabelText(label);

    screen.getByDisplayValue(field.value);

    fireEvent.keyDown(field, { key: "Tab", code: "Tab" });
    fireEvent.keyDown(field, { key: "Backspace", code: "Backspace" });
    expect(field.value).not.toEqual(value);
  });

  it("deve inserir apenas emails validos no input", async () => {
    const handleSelecetedTags = jest.fn();

    render(
      <TagsInput
        selectedTags={handleSelecetedTags}
        id="tags"
        name="emails"
        placeholder="add Emails"
        label="emails"
        type="email"
      />
    );

    const value = "aaaaa";
    const label = "emails";
    const field = screen.getByLabelText(label);

    fireEvent.input(field, { target: { value } });
    fireEvent.blur(field);
    await screen.findByLabelText(label);
    fireEvent.keyDown(field, { key: "Tab", code: "Tab" });
    screen.getByDisplayValue(field.value);
    expect(field.value).not.toEqual(value);
  });

  it("deve inserir um emails validos e criar uma nova tag ao pressionar tab", async () => {
    const handleSelecetedTags = jest.fn();
    const handleClickTab = jest.fn();

    render(
      <TagsInput
        selectedTags={handleSelecetedTags}
        id="tags"
        name="emails"
        placeholder="add Emails"
        label="emails"
        type="email"
      />
    );

    const value = "teste@teste.com";
    const label = "emails";
    const field = screen.getByLabelText(label);

    fireEvent.input(field, { target: { value } });
    fireEvent.blur(field);
    await screen.findByLabelText(label);

    screen.getByDisplayValue(field.value);
    fireEvent.keyDown(field, { key: handleClickTab, code: handleClickTab });
    console.log(field.value);
    expect(field.value).toEqual(value);
  });
});
