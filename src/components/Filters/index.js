import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';
import styles from './Filters.module.scss'
import classNames from "classnames/bind";
const cx=classNames.bind(styles)



function Filters(props) {
    const [searchText, setSearchText] = useState('')
    const handleChangeText=(e)=>{
        props.handle(e.target.value)
        
    }
    const [radio,setRadio]=useState(1);

    useEffect(() => {
      props.radio(radio);
    },[radio]);
    return ( 
    <div className={cx('main')}>
        <div className={cx('filterblock')}>
             <h4 className={cx('heading')}>Search</h4>
             <input type="text" placeholder='Input search text'  onChange={handleChangeText}/>
             <button >
                <FontAwesomeIcon icon={faSearch}/>
             </button>
        </div>
        <div className={cx('filterblock')}>
            <h4>Filter by status</h4>
            <div className={cx('content')}>
                <div>
                    <input className={cx('inputStatus')} type="radio" id='all' value={'All'} checked={radio === 1} onClick={()=>setRadio(1)}/>
                    <label className={cx('label')} htmlFor='all'>All</label>
                </div>
                <div>
                    <input className={cx('inputStatus')} type="radio" id='completed' value={'Completed'} checked={radio === 2} onClick={()=>setRadio(2)} />
                    <label className={cx('label')} htmlFor='completed'>Completed</label>
                </div>
                <div>
                    <input className={cx('inputStatus')} type="radio" id='todo' value={'To do'} checked={radio === 3} onClick={()=>setRadio(3)} />
                    <label className={cx('label')} htmlFor='todo'>To do</label>
                </div>
            </div>
        </div>
        <div className={cx('filterBlock')}>
            {/* <h4 className={cx('heading')}>Filter By Priorities</h4>
            <div className={cx('content')}>
            <select className={cx('inputPriorities')} >
                <option value="">-- Please select --</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            </div> */}
      </div>
        
    </div> 
    );
}

export default Filters;