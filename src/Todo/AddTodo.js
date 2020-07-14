import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  addTodo: {
    marginBottom: "1rem",
  },
});

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddTodo({ createTodo }) {
  const classes = useStyles();
  const input = useInputValue("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (input.value().trim()) {
      createTodo(input.value());
      input.clear();
    }
  };

  return (
    <form className={classes.addTodo} onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type={"submit"}>Add Todo</button>
    </form>
  );
}

AddTodo.propTypes = {
  createTodo: PropTypes.func.isRequired,
};
export default AddTodo;
