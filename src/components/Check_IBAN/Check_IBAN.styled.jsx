import styled from "styled-components";

export const OuterContainer = styled.div`
    text-align: center;
    margin-top: 5rem;

    h1 {
        color: #051990;
        font-size: clamp(1.8rem, 1.3839rem + 0.8929vw, 2.5rem);
        padding-bottom: 1rem;
    }
`;

export const CardIBAN = styled.div`
    width: clamp(300px, 90vw, 450px);
    margin: 0 auto;
    height: fit-content;
    background-color: white;
    border-radius: 10px;
    padding: 1.5rem 0;

    -webkit-box-shadow: 0px 0px 13px 2px rgba(0,0,0,0.27); 
    box-shadow: 0px 0px 13px 2px rgba(0,0,0,0.27);

    p {
        font-size: 16px;
        color: #404946;
    }
`;