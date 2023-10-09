import React, {useEffect, useState} from "react";
import { Carousel } from 'antd';
import './BestSellingPage.css';

export const BestSellingPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch("http://backend:8080/book/getBestsellers")
            .then(res=>res.json())
            .then((result)=>{
                    setBooks(result);
                }
            )
    },[])

    return (<div className="bestSellingPage">
                <Carousel autoplay >
                    {books.map(book => (<img className="bookCover" src={book.cover} alt={book.name} key={book.id}/>))}
                </Carousel>
            </div>
    )
}
