import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { ImcompleteTodos } from "./components/imcompleteTodo";
import { CompleteTodos } from "./components/completeTodos";

export const App = () => {
  const [todoText, settodoText] = useState("");
  const [imcompleteTodos, setImcompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

  const onChangeTodoText = (event) => settodoText(event.target.value);

  const onclickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    settodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newImcompleteTodos = [...imcompleteTodos];
    newImcompleteTodos.splice(index, 1);

    const newcompleteTodos = [...completeTodos, imcompleteTodos[index]];
    setImcompleteTodos(newImcompleteTodos);
    setcompleteTodos(newcompleteTodos);
  };

  const onClickBack = (index) => {
    const newcompleteTodos = [...completeTodos];
    newcompleteTodos.splice(index, 1);

    const newImcompleteTodos = [...imcompleteTodos, completeTodos[index]];
    setcompleteTodos(newcompleteTodos);
    setImcompleteTodos(newImcompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onclickAdd}
      />
      <ImcompleteTodos
        todos={imcompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
