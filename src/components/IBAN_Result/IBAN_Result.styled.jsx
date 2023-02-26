import styled from "styled-components";

export const OuterContainer = styled.div`
    width: clamp(300px, 90vw, 400px);
    margin: 0 auto;
    background-color: white;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 13px 2px rgba(0,0,0,0.27); 
    box-shadow: 0px 0px 13px 2px rgba(0,0,0,0.27);
    height: 200px;

    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    text-align: center;

    h3 {
        font-size: 12px;
    }

`;

export const IBAN_Info_div = styled.div`
    width: clamp(300px, 90vw, 350px);
    margin: 0 auto;
    border: solid green 1px;
    height: 80%;
    border-radius: 10px;
`;

export const IBAN_Result_Title = styled.h3`
    color: green;
    font-size: 12px;
`;
