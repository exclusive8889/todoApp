
import Filters from './components/Filters';
import styles from './App.module.scss'
import classNames from "classnames/bind";
import TodoList from './components/TodoList';
import { useState } from 'react';
const cx=classNames.bind(styles)


function App() {
  const [data,setData]=useState('')
  const [radio,setRadio]=useState()
  const handleChangtextsearch =(text)=>{
    setData(text)
  }
  const handleRadio =(id)=>{
    setRadio(id)
  }
  // console.log(radio)
  // console.log(data)
  return (
    <div className={cx('app')}>
      <div className={cx('main')}>
        <p className={cx('heading')}>Todo App</p>
        <div className={cx('filters')}>
          <Filters handle={handleChangtextsearch} radio={handleRadio}/>
        </div>
        <div className={cx('todolist')}>
          
          <TodoList textsearch={data} radio={radio}/>
        </div>
      </div>
    </div>
  );
}

export default App;
