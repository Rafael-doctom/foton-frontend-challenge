import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
const FilterAnimationImg = keyframes`
    0%{
        transform: perspective(500px) translate3d(10px, 0, 100px);
    }
    5%{
        transform: perspective(500px) translate3d(10px, 0, 100px);
    }
    10%{
        top: 0px;
    }
    50%{
        transform: none;
        top: 80px;
    }
    90%{
        filter: blur(13px);
    }
    100% {
        filter: none;
    }
`

const Header = styled.header`
    background-color: #FFF6E5;
    padding-top: 13px;
`

const GoBackLink = styled(Link)`
    color:#7154c1;
    text-decoration: none;
    font-size: 1.6rem;
    align-items: center;
    display: flex;

    svg{
        margin-right: 13px;
    }
`

const BookImgWrapper = styled.div`
    background-image: linear-gradient(#FFF6E5, #fff);
    display: flex;
    justify-content: center;
    padding-top: 23px;
    margin-bottom: 80px;
    img{
        width: 65%;
        animation-duration: ${props => props.duration};  
        animation-timing-function: ${props => props.timingFunction};      
        animation-delay: ${props => props.delay};  
        animation-iteration-count: ${props => props.iterationCount};  
        animation-direction: ${props => props.direction}; 
        animation-fill-mode: ${props => props.fillMode};  
        animation-play-state:  ${props => props.playState};  
        display: ${props => props.display};
        transition: 0.4s;
        animation-name: ${FilterAnimationImg};
    }
    @media(min-width: 280px){
        svg{
            display: none;
        }
        img{
            position: initial;
            width: 65%;
        }
        display: flex;
        justify-content: center;
        background-image: linear-gradient(#FFF6E5, #fff);
    }
    @media(min-width: 371px){
        display: flex;
        justify-content: center;
        background-image: linear-gradient(#FFF6E5, #fff);
    }

    @media(min-width: 378px){
        img{
            width: 20%;
            position: initial;
        }
        svg{
            display: none;
        }
    }
    @media(min-width: 380px){
        img{
            width: 45%;
            position: initial;
        }
        svg{
            display: none;
        }
    }
    @media(min-width: 700px){
        img{
            width: 30%;
            position: initial;
        }
        svg{
            display: none;
        }
    }
    @media(min-width: 900px){
        img{
            width: 30%;
            position: initial;
        }
        svg{
            display: none;
        }
    }
    @media(min-width: 1000px){
        img{
            width: 20%;
            position: initial;
        }
        svg{
            display: none;
        }
    }
`
BookImgWrapper.defaultProps = {  
    duration: '4s',
    delay: '0s',
    iterationCount: '1',
    direction: 'normal',
    fillMode: 'both',
    playState: 'running',
    display: 'block'
};


const Author = styled.h2`
    margin: 13px 0;
    color:#FF6978;
`

export { BookImgWrapper, Author, Header, GoBackLink }