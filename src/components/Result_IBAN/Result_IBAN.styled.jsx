import styled from "styled-components";

export const OuterContainer = styled.div`
    width: clamp(300px, 90vw, 450px);
    margin: 3rem auto;
    padding: 1rem 0;
    background-color: white;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 13px 2px rgba(0,0,0,0.27); 
    box-shadow: 0px 0px 13px 2px rgba(0,0,0,0.27);
    position: relative;

    text-align: center;

    h3 {
        font-size: 14px;
        span{
            color: ${props => props.valid ? '#17623b' : '#dd2727'};
        }
    }

`;

export const ResultDiv = styled.div`

    display: flex;
    justify-content: center;
    gap: .5rem;
    align-items: center;
    margin: 0 auto;
    margin-top: 1rem;
    padding: 1rem .5rem;
    border-radius: 10px;
    width: clamp(200px, 80vw, 350px);
    border: ${props => props.valid ? '#17623b' : '#dd2727'} 1px solid;

    img {
        width: 25px;
        height: 25px;
    }

`;


export const ResultTitle = styled.h3`
    color: ${props => props.valid ? '#17623b' : '#dd2727'};
    font-size: 12px;
`;


