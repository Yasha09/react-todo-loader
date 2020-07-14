import React,{useContext} from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import MyContext from "../context";

const useStyles = makeStyles({
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem",
  },
  input: {
    marginRight: "1rem",
  },
});

export default function TodoItem({ todo, index, handleChecked }) {
  const classes = useStyles();
  const classesStyle = [];
  if (todo.completed) {
    classesStyle.push("done");
  }
  const {removeTodo}=useContext(MyContext)
  return (
    <li className={classes.li}>
      <span className={classesStyle.join(" ")}>
        <input
          type={"checkbox"}
          checked={todo.completed}
          className={classes.input}
          onClick={() => handleChecked(todo.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className={"rm"} onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  );
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  handleChecked: PropTypes.func.isRequired,
};
