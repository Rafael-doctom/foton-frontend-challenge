import React, { useEffect, useState } from "react"
import {VscSearch} from "react-icons/vsc"
import {Header, SearchInputWrapper, SearchInput, SearchIcon, UserWelcomeText, UserName, Books, Book, BookTitle, BookAuthor} from './styles'

function Home() {
    const [search, setSearch] = useState("")
    const [searchData, setSearchData] = useState([])

    const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRleKTGZ3asGHBqoap1YPeldfLJ9Iwk8ZN7prhoOh0Fo6hv8_JoSXxFwIbu_cEYlO8HtG4&usqp=CAU"

    const url = `https://www.googleapis.com/books/v1/volumes?q=`;
    
    const fetchData = async (searchParam) => {
      try {
        if(searchParam == ""){
            setSearch(searchParam)
            setSearchData(undefined)
        }
        if(searchParam != "") {
            setSearch(searchParam)
            
            const response = await fetch(url + searchParam);
            const json = await response.json();
            setSearchData(json.items)
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    return (
        <>  
            <Header>
                <SearchInputWrapper>
                    <SearchIcon><VscSearch /></SearchIcon>
                    <SearchInput onChange={e => fetchData(e.target.value)} placeholder="Search Book"/>
                </SearchInputWrapper>
                {search == "" ? <UserWelcomeText>Hi, <UserName>Mehmed AL Fatih 👋</UserName></UserWelcomeText> : <UserWelcomeText>Results for: {search}</UserWelcomeText>}
            </Header>
            {searchData != undefined && search != "" ? 
                <Books>
                    {searchData.map((data, index) => {
                        return (
                            <Book key={index}>
                                {console.log(data, data.volumeInfo.title)}
                                <img src={data.volumeInfo.imageLinks != undefined ? data.volumeInfo.imageLinks.thumbnail : defaultImg}/>
                                <BookTitle>{data.volumeInfo.title}</BookTitle>
                                <BookAuthor>by {data.volumeInfo.authors ? data.volumeInfo.authors : data.volumeInfo.publisher}</BookAuthor>
                            </Book>
                        )
                    })}
                </Books>
            :
                <h1>lalalalal</h1>
            }
        </>
    )
}

export default Home