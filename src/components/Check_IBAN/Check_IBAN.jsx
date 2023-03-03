import React from 'react'
import Form_IBAN from '../Form_IBAN/Form_IBAN'
import Result_IBAN from '../Result_IBAN/Result_IBAN'

import { useContext } from "react";
import IBAN_CONTEXT from "../../context/IBAN_Context";

import { 
  CardIBAN, 
  OuterContainer
 } from "./Check_IBAN.styled"


function Check_IBAN() {

  const { IBAN } = useContext(IBAN_CONTEXT);

  return (
    <>

      <OuterContainer>
          <h1>Check & Verify an IBAN</h1>
          <CardIBAN>
              <Form_IBAN/>
              <p>To validate, type the IBAN in the specified field above.</p>
          </CardIBAN>
      </OuterContainer>

      {IBAN.IBAN && <Result_IBAN/>}

    </>
  )
}

export default Check_IBAN;