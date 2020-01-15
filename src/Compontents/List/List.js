import React, { useContext } from 'react';
import { Context } from '../../context';
import classes from './List.module.css';

function List() {
  let list = useContext(Context);
  console.log(list);
  return (
    <div className='userReps'>
      <ul className={classes.userReps}>
        {list.map(item => {
          return (
            <li key={item.id}>
              <h1>{item.name}</h1>
              <span className='stars'>
                <i className='fas fa-star' />
                <span>{item.watchers}</span>
              </span>
              <span className='forks'>
                <i className='fas fa-code-branch' />
                <span>{item.forks_count}</span>
              </span>
              <p>{item.description ? item.description : 'no description'}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
