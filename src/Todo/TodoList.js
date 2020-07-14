import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TodoItem from "./TodoItem";

const useStyles = makeStyles({
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
});

export default function TodoList(props) {
  const classes = useStyles();
  return (
    <ul className={classes.ul}>
      {props.todos.map((item, index) => (
        <TodoItem
          todo={item}
          index={index}
          key={item.id}
          handleChecked={props.handleChecked}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChecked:PropTypes.func.isRequired,
};
