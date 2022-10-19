import { useEffect,useState } from 'react';
import useTime from '../hooks/time'
import './Filter.css'
const Filter =(props)=>{
    const currentTime=useTime(5000)
    
    const onSelectHandler=(events)=>{
        console.log('onSelect Handler', events.target.value)
        props.onFilterChange(events.target.value);
    }
  return (
      <div className="filter">
          <div className="filter_control">
              <label> Filter by year</label>
              <span className='filter-time' >{currentTime}</span>
              <select value={props.selectedFilter} onChange={onSelectHandler}>
                  <option value='2022'>2022</option>
                  <option value='2021'>2021</option>
                  <option value='2020'>2020</option>
                  <option value='2019'>2019</option>
              </select>
          </div>
      </div>
  )
}
export default Filter 
         