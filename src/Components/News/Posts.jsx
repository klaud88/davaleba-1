import React from 'react';
import './Style/News.css';

const Posts = (props) => {


    return (

        <>


         <ul className='list'>
                <li>ID: {props.id} Author: {props.author} Date: {props.date} </li>
         </ul>
        
        </>
    )
}


export default Posts