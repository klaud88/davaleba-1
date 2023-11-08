import React, { useState } from 'react';
import './Style/News.css';
import Posts from './Posts';



const News = () => {


    const articles = [
        {
            id: 1,
            author: 'გიორგი',
            date: "2.11.2023"

        }, 
        {
            id: 2,
            author: 'გუგა',
            date: "28.10.2023"

        },
        {
            id: 3,
            author: 'დათა',
            date: "29.10.2023"

        },
     ];

   
    return (

        <>
    <ul>
        {articles.map(news => <li key={news.id}>
        <Posts  id={news.id} author={news.author} date={news.date}/></li>)}
    </ul>
        </>
    )
}

export default News