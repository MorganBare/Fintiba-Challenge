import styled from "styled-components";

export const OuterContainer = styled.div`
    text-align: center;
    position: absolute;
    top: 20%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    h1 {
        color: #051990;
        font-size: clamp(1.5625rem, 1.3839rem + 0.8929vw, 2.1875rem);
        padding-bottom: 1rem;
    }
`;

export const CardIBAN = styled.div`
    width: clamp(300px, 90vw, 400px);
    margin: 0 auto;
    height: fit-content;
    background-color: white;
    border-radius: 10px;
    padding: 1rem 0;

    -webkit-box-shadow: 0px 0px 13px 2px rgba(0,0,0,0.27); 
    box-shadow: 0px 0px 13px 2px rgba(0,0,0,0.27);

    p {
        font-size: 12px;
        color: #404946;
    }
`;