import React, { useState } from 'react';

import SearchForm from '../Compontents/SearchForm/SearchForm';
import Card from '../Compontents/Card/Card';
import { Context } from '../context';
import classes from './App.module.css';

function App() {
  const [userName, setUsername] = useState('');
  const [userObject, setUserObject] = useState({});
  const [showCard, setShowCard] = useState(false);
  const [reps, setReps] = useState([]);

  const submitHandler = event => {
    event.preventDefault();
    const userName = event.target[0].value;
    setUsername(userName);

    fetch('https://api.github.com/users/' + userName)
      .then(data => data.json())
      .then(res => {
        setUserObject(res);
        if (res.message === 'Not Found') {
          setShowCard(false);
        } else {
          fetch('https://api.github.com/users/' + userName + '/repos')
            .then(data => data.json())
            .then(res => {
              const filteredReps = res
                .sort((a, b) => b.watchers - a.watchers)
                .slice(0, 4);
              setReps(filteredReps);
              // this nestedness is needed because it helps to show card only when data is loaded
              setShowCard(true);
            })
            .catch(error => console.log(error));
        }
      })
      .catch(error => console.log(error));
  };

  let card = null;
  if (showCard) {
    card = (
      <Card
        src={userObject.avatar_url}
        name={userObject.name}
        bio={userObject.bio}
        reps={userObject.public_repos}
        followers={userObject.followers}
      />
    );
  }

  let warning = null;
  if (userObject.message === 'Not Found') {
    warning = <p className={classes.warning}>Please enter correct username</p>;
  }

  return (
    <Context.Provider value={reps}>
      <article className={classes.app}>
        <SearchForm submitHandler={submitHandler} value={userName} />
        {warning}
        {card}
      </article>
    </Context.Provider>
  );
}

export default App;
