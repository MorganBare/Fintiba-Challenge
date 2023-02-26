/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import IBAN_Form from '../IBAN_Form/IBAN_Form'

import { CardIBAN, OuterContainer } from "./IBAN_Check.styled"

function IBAN_Check() {
  return (
    <OuterContainer>
        <h1>Check & Verify an IBAN</h1>
        <CardIBAN>
            <IBAN_Form/>
            <p>To validate, type the IBAN in the specified field above.</p>
        </CardIBAN>
    </OuterContainer>
  )
}

export default IBAN_Check