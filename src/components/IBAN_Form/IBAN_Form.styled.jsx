import styled from "styled-components";

export const Form_IBAN = styled.form`
    display: flex;
    justify-content: center;
    gap: .5rem;
    margin-bottom: .5rem;
`;

export const Input_IBAN = styled.input`
    width: 250px;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 8px;
    font-size: 10px;
`;

export const Input_Submit = styled.input`
    background-color: #0165fb;
    border-radius: 5px;
    padding: 8px;
    font-size: 10px;
    color: white;
    font-weight: bold;

    :hover {
        cursor: pointer;
        background-color: #0143a5;
        transition: 0.3s;
    }
`;