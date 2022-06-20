import {  faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './Todo.module.scss'
import classNames from "classnames/bind";
const cx=classNames.bind(styles)
function Todo({data,index,removeTodo,comple}) {
    // console.log(data)
    return ( 
        <div className={cx('main')}
        style={{ textDecoration: data.isCompleted ? "line-through" : "" }}
        >
            {/* <p>{comple}</p> */}
            <input type={"checkbox"} checked={data.isCompleted === true} onClick={() => comple(index)}/>
            <span className={cx('content')}>{data.job}</span>
            <button className={cx('btn',(data.option))}>{data.option}</button>
            <FontAwesomeIcon icon={faTrash} onClick={() => removeTodo(data.id)}/>
        </div>
    );
}

export default Todo;