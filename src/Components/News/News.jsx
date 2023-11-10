import React, { useState } from 'react';
import './Style/News.css';




const News = () => {

    const [lengths, setLength] = useState('');
    
    const handle = (x) => {
    const length = x.target.value;
    setLength(length);

  if (length.length > 10){
     alert("მაქსიმალური სიმბოლოების რაოდენობა არის 10");
     setLength("");
      }//რამზეს ასე სწორია? else, თუ არ მინდა საერთოდ, რომ არ დავწერო?
    }   
    
    return (

        <>
        <input style={{width: 200,height: 30,margin: 30,padding: 5}} value={lengths} onChange={handle}/>
        </>
    )
}

export default News