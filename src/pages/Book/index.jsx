import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookImgWrapper, Author, Header, GoBackLink, BookDetails, BookOptionsWrapper, BookOption } from "./styles";
import { BiArrowBack, BiBookOpen } from "react-icons/bi"
import Skeleton from "react-loading-skeleton";
import {VscBookmark} from "react-icons/vsc"
import {FiShare} from "react-icons/fi"
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';


function Book() {
    let { id } = useParams()
    const [bookData, setBookData] = useState(undefined);
    
    const sucessNotify = () => toast.success('The book has been saved!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const errorNotify = () => toast.error('This book has already been saved', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

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
                                    <BookOption onClick={sucessNotify}>
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
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </>
        )
    } else {
        return(
            <h1>Loading Book...</h1>
        )
    }
}

export default Book;
