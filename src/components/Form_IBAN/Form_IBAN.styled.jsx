import styled from "styled-components";

export const FormIBAN = styled.form`
    display: flex;
    justify-content: center;
    gap: .5rem;
    margin-bottom: .5rem;

    @media screen and (max-width: 458px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Input_IBAN = styled.input`
    width: clamp(200px, 80vw, 320px);
    border: 1px solid gray;
    border-radius: 5px;
    padding: 8px;
    font-size: 13px;
`;

export const Input_Submit = styled.input`
    background-color: #0165fb;
    border-radius: 5px;
    padding: 8px;
    font-size: 10px;
    color: white;
    font-weight: bold;
    width: 50px;

    -webkit-box-shadow: inset 0px 0px 27px 5px rgba(0,0,0,0.27); 
    box-shadow: inset 0px 0px 27px 5px rgba(0,0,0,0.27);

    :hover {
        cursor: pointer;
        background-color: #0143a5;
        transition: 0.3s;
    }

    @media screen and (max-width: 458px) {
        font-size: 13px;
        width: 150px;
    }
`;