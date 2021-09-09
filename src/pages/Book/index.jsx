import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookImgWrapper, Author, Header, GoBackLink, BookDetails, BookOptionsWrapper, BookOption } from "./styles";
import { BiArrowBack, BiBookOpen } from "react-icons/bi"
import {VscBookmark} from "react-icons/vsc"
import {FiShare} from "react-icons/fi"
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
                    {bookData.imageLinks != undefined ? 
                            <BookImgWrapper>
                                <img src={bookData.imageLinks.thumbnail} />
                                <BookOptionsWrapper>
                                    <BookOption href={bookData.infoLink} target="_blank">
                                        <BiBookOpen size="30"/>
                                        <p>View Book</p>
                                    </BookOption>
                                    <BookOption>
                                        <FiShare size="30"/>
                                        <p>Share Book</p>
                                    </BookOption>
                                    <BookOption>
                                        <VscBookmark size="30"/>
                                        <p>Save book</p>
                                    </BookOption>
                                </BookOptionsWrapper>
                            </BookImgWrapper>
                        :
                            <BookImgWrapper>
                                <img src={defaultImg}/>
                            </BookImgWrapper>
                        }
                </Header>
                <BookDetails>
                    <h1>{bookData.title}</h1>
                    <Author>{bookData.authors || bookData.publisher}</Author>
                    <p>{bookData.description || "This book dont have a description :("}</p>
                </BookDetails>
            </>
        )
    } else {
        return(
            <h1>Loading book...</h1>
        )
    }
}

export default Book;
