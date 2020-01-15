import React from 'react';
import List from '../List/List';
import classes from './Card.module.css';

function Card({ src, name, bio, reps, followers }) {
  return (
    <div className={classes.card}>
      <div className={classes.userInfo}>
        <div>
          <img src={src} alt='User pic' />
          {name ? <p>{name}</p> : null}
        </div>
        <p>{bio}</p>
        <p>Repos: {reps}</p>
        <p>Followers: {followers}</p>
      </div>
      <List />
    </div>
  );
}

export default Card;
