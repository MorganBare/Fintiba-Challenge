/* eslint-disable react/jsx-pascal-case */
import { useContext } from "react";
import IBAN_Context from "../../context/IBAN_Context";

import checkmark from '../../assets/checkmark.png'
import crossmark from '../../assets/cross-mark.png'

import {
    OuterContainer,
    IBAN_Result_Title,
    ResultDiv,
} from "./IBAN_Result.styled"

function IBAN_Result() {

  const { IBAN } = useContext(IBAN_Context);

  return (
    <OuterContainer valid={IBAN.isValid}>
      <h3>IBAN Validation result for <span>{IBAN.IBAN}</span></h3>
      <ResultDiv valid={IBAN.isValid}>
        <img src={IBAN.isValid ? checkmark : crossmark} alt="" />
        <IBAN_Result_Title valid={IBAN.isValid}>{IBAN.IBAN} is {IBAN.isValid ? 'a valid' : 'an invalid'} IBAN</IBAN_Result_Title>
      </ResultDiv>
    </OuterContainer>
  )
}

export default IBAN_Result