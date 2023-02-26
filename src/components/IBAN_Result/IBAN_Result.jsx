/* eslint-disable react/jsx-pascal-case */

import {
    OuterContainer,
    IBAN_Info_div,
    IBAN_Result_Title
} from "./IBAN_Result.styled"

function IBAN_Result() {



  return (
    <OuterContainer>
      <h3>IBAN Validation result for</h3>
      <IBAN_Info_div>
        <IBAN_Result_Title> is a valid IBAN</IBAN_Result_Title>
      </IBAN_Info_div>
    </OuterContainer>
  )
}

export default IBAN_Result