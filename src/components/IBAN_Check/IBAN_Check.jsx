/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import IBAN_Form from '../IBAN_Form/IBAN_Form'
import IBAN_Result from '../IBAN_Result/IBAN_Result'

import { useContext } from "react";
import IBAN_Context from "../../context/IBAN_Context";

import { CardIBAN, OuterContainer } from "./IBAN_Check.styled"

function IBAN_Check() {

  const { IBAN } = useContext(IBAN_Context);

  return (
    <>

      <OuterContainer>
          <h1>Check & Verify an IBAN</h1>
          <CardIBAN>
              <IBAN_Form/>
              <p>To validate, type the IBAN in the specified field above.</p>
          </CardIBAN>
      </OuterContainer>

      {IBAN.IBAN && <IBAN_Result/>}
    </>
  )
}

export default IBAN_Check