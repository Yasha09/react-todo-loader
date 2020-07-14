import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles({
  root:{
    display:"flex",
    justifyContent:"center",
    margin:'.5rem'
  }
})

const Loader=()=>{
  const classes = useStyles();
  return(
      <div className={classes.root}>
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
  )
}
export default Loader;
