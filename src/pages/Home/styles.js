import styled from "styled-components"

const Header = styled.header`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(#ffe3c7a1 75%, #fff);
    text-align: center;
`

const SearchInputWrapper = styled.div`
    text-align: center;
    width: 100%;
    padding-top: 18px;
`

const SearchInput = styled.input`
    text-indent: 42px;
    font-size: 1.3rem;
    margin-bottom: 13px;
    padding: 16px;
    border-radius: 13px;
    border: none;
    width: 80%;
    outline: none;

    &:focus::placeholder {
        color: #000;
        transition: 0.4s;
    }
`

const SearchIcon = styled.i`
    position: absolute;
    padding: 20px;
    min-width: 40px;
`

const UserWelcomeText = styled.h1`
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
`

const Book = styled.div`
    width: 40%;
`

const BookTitle = styled.h3`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const BookAuthor = styled.p`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export { Header, SearchInputWrapper, SearchInput, SearchIcon, UserWelcomeText, UserName, Books, Book, BookTitle, BookAuthor }