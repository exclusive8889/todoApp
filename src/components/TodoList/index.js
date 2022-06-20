import Todo from '../Todo';
import styles from './TodoList.module.scss'
import classNames from "classnames/bind";
import { useState,useEffect } from 'react';
const cx=classNames.bind(styles)

function TodoList(props) {
    const [job,setJob]=useState('')
    const [jobs,setJobs]=useState([])
    const [jobs1,setJobs1]=useState(()=>{
        return JSON.parse(localStorage.getItem('todoList'))
    })
    const [option,setOption]=useState('Medium')
    const [id,setId]=useState(0)
    
    const handleAdd=()=>{
        setJobs(pre=>[...pre,{id,job,option,isCompleted: false}])
        setJob('')
        setJobs1(pre=>[...pre,{id,job,option,isCompleted: false}])
    }
    
    useEffect(() => {
        var sr=jobs1.filter((course,index)=>{
            return course.job.includes(props.textsearch)
        })
        props.textsearch.length==0 ? setJobs(jobs1) : setJobs(sr);
    },[props.textsearch.length]);
   
    useEffect(() => {
       if(props.radio === 1){
          setJobs(jobs1)
       }
       else if(props.radio === 2){
        let sr=jobs.filter((course,index)=>{
            return course.isCompleted == true
        })
        setJobs(sr)
       }
       else if(props.radio === 3){
        let sr=jobs1.filter((course,index)=>{
            return course.isCompleted == false
        })
        setJobs(sr)
       }
    },[props.radio]);
    useEffect(() => {
       
        if(props.radio === 1){
           setJobs(jobs1)
        }
        else if(props.radio === 2){
         let sr=jobs.filter((course,index)=>{
             return course.isCompleted == true
         })
         setJobs(sr)
          
        }
        else if(props.radio === 3){
         let sr=jobs1.filter((course,index)=>{
             return course.isCompleted == false
         })
         setJobs(sr)
          
        }
        localStorage.setItem('todoList', JSON.stringify(jobs1))
        
        
     },[jobs1.length]);

    const handleChangeInput=(e)=>{
        setJob(e.target.value)
        setId(pre=>pre+1)
    }
    const handleOption=(e)=>{
        setOption(e.target.value)
    }
    const removeTodo = (index) => {
        const newTodos1 = [...jobs1];
        // const newTodosop1=newTodos1.filter(item => item.isCompleted == true);
        const newTodos=newTodos1.filter(item => item.id !== index);
        // console.log(newTodos)
       
        setJobs(newTodos);
        setJobs1(newTodos);
      };
    const comple=(index)=>{
        const newTodos = [...jobs];
        
        if(newTodos[index].isCompleted === true){
            newTodos[index].isCompleted = false;
        }
        else {
            newTodos[index].isCompleted = true;
        }
        
        setJobs(newTodos);
        setJobs1(newTodos);
    }
    return (
    <div className={cx('main')}>
        <div className={cx('todolist')}>
            {jobs.map((job, index) => (
                <Todo 
                key={index} 
                index={index} 
                data={job}
                removeTodo={removeTodo}
                comple={comple}
                />
            ))}
            
        </div>
        <div className={cx('form')}>
            <input className={cx('textInput')} 
            value={job} 
            type="text" 
            onChange={handleChangeInput}/>
            <select className={cx('priority')} value={option} onChange={handleOption}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
            </select>
            <button onClick={handleAdd}>Add</button>
        </div>
        
    </div> 
    );
}

export default TodoList;