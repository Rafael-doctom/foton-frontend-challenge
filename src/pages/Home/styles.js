import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom"

const LoadingAnimationTopToBottom = keyframes`
    from {
        opacity: 0;
        transform: translateY(16px);
    }
    to {
        opacity: 1;
    }
`
const LoadingAnimationBottomToTop = keyframes`
    from {
        opacity: 0;
        transform: translateY(-16px);
    }
    to {
        opacity: 1;
    }
`
const LoadingAnimationLeftToRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(-16px);
    }
    to {
        opacity: 1;
    }
`

const Header = styled.header`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(#ffe3c7a1 75%, #fff);
    text-align: center;
    margin-bottom: 23px;
    @media(min-width: 700px){
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-around;
    }
`

const SearchInputWrapper = styled.div`
    text-align: center;
    width: 100%;
    padding-top: 18px;
`

const SearchInput = styled.input`
    transition: 0.4s;
    animation: ${LoadingAnimationTopToBottom} 0.6s linear 1;
    text-indent: 42px;
    font-size: 1.3rem;
    margin-bottom: 13px;
    padding: 16px;
    border-radius: 13px;
    border: none;
    width: 60%;
    outline: none;
    &:focus::placeholder {
        color: #000;
        transition: 0.4s;
    }
`

const SearchIcon = styled.i`
    position: absolute;
    animation: ${LoadingAnimationBottomToTop} 0.7s linear 1;
    padding: 20px;
    min-width: 40px;
`

const UserWelcomeText = styled.h1`
    animation: ${LoadingAnimationLeftToRight} 0.8s linear 1;
    color: #54565A;
    width: 100%;
    padding: 8px 0;
`

const UserName = styled.b`
    color: #ff6978;
`

const Books = styled.section`
    margin-top: 32px;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    @media(min-width:  1000px){
        img {
            width: 30%;
        }
        div {
            width: 30%;
        }
    }
`

const Book = styled.div`
    animation: ${LoadingAnimationTopToBottom} 1s linear 1;
    width: 40%;
    transition: 0.4s;

    &:hover{
        color: #7154c1;
    }
`

const BookTitle = styled.h3`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-decoration: none;
`

const BookAuthor = styled.p`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 13px;
    text-decoration: none;
`

const BookImage = styled.img`
    scroll-snap-align: start;
    width: 45%;
`

const LinkDiv = styled(Link)`
    color: #000;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

const BooksToDiscoverWrapper = styled.main`
    width: 90%;
    margin: 0 auto;
`

const BooksCarousel = styled.div`
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scrollbar-color: #000;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    ::-webkit-scrollbar-track
    {
        display: none;
	    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	    border-radius: 10px;
	    background-color: #F5F5F5;
    }
    ::-webkit-scrollbar
    {
        display: none;
	    width: 12px;
	    background-color: #f1f1f1;
        color: #000;
    }
    ::-webkit-scrollbar-thumb
    {
	    border-radius: 10px;
	    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	    background-color: #1A8CD8;
    }
`

export { Header, SearchInputWrapper, SearchInput, SearchIcon, UserWelcomeText, UserName, Books, Book, BookTitle, BookAuthor, BookImage, LinkDiv, BooksToDiscoverWrapper, BooksCarousel }