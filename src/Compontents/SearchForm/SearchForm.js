import React from 'react';
import classes from './SearchForm.module.css';

function SearchForm(props) {
  return (
    <form
      className={classes.Form}
      onSubmit={event => props.submitHandler(event)}
    >
      <input type='text' placeholder='username ' value={props.userName}></input>
      <input type='submit' value='🔎'></input>
    </form>
  );
}

export default SearchForm;
