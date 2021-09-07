import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookImgWrapper, Author, Header, GoBackLink } from "./styles";
import { BiArrowBack } from "react-icons/bi"
import axios from "axios";

function Book() {
    let { id } = useParams()
    const [bookData, setBookData] = useState(undefined);

    const url = `https://www.googleapis.com/books/v1/volumes/${id}`;

    const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRleKTGZ3asGHBqoap1YPeldfLJ9Iwk8ZN7prhoOh0Fo6hv8_JoSXxFwIbu_cEYlO8HtG4&usqp=CAU"

    useEffect(async () => {
        try {
            const response = await axios.get(url);
            const json = response.data;
            if(json != undefined) {
                setBookData(json.volumeInfo);
            } else {
                console.error("deu ruim")
            }
        } catch(e) {
            setBookData(undefined)
            console.log(e)
        }
        
    }, []);
    console.log(bookData)
    if(bookData != undefined){
        return(
            <>
                <Header>
                    <GoBackLink to="/"><BiArrowBack/></GoBackLink>
                    <BookImgWrapper>
                        {bookData.imageLinks != undefined ? 
                            <img src={bookData.imageLinks.thumbnail} />
                        :
                            <img src={defaultImg}/>
                        }
                    </BookImgWrapper>
                </Header>
                <main>
                    <h1>{bookData.title}</h1>
                    <Author>{bookData.authors || bookData.publisher}</Author>
                    <p>{bookData.description}</p>
                </main>
            </>
        )
    } else {
        return(
            <h1>Loading book...</h1>
        )
    }
}

export default Book;
