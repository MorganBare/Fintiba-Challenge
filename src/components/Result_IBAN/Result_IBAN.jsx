import { useContext } from "react";
import IBAN_Context from "../../context/IBAN_Context";

import checkmark from '../../assets/checkmark.png'
import crossmark from '../../assets/cross-mark.png'

import {
    OuterContainer,
    ResultTitle,
    ResultDiv,
} from "./Result_IBAN.styled"

function Result_IBAN() {

  const { IBAN } = useContext(IBAN_Context);

  return (
    <OuterContainer valid={IBAN.isValid}>
      <h3>IBAN Validation result for <span>{IBAN.IBAN}</span></h3>
      <ResultDiv valid={IBAN.isValid}>
        <img src={IBAN.isValid ? checkmark : crossmark} alt="" />
        <ResultTitle valid={IBAN.isValid}>{IBAN.IBAN} is {IBAN.isValid ? 'a valid' : 'an invalid'} IBAN</ResultTitle>
      </ResultDiv>
    </OuterContainer>
  )
}

export default Result_IBAN;