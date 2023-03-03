/* eslint-disable react/jsx-pascal-case */

import { FormIBAN, Input_IBAN, Input_Submit } from "./Form_IBAN.styled"
import { useContext, useEffect, useState } from "react";
import IBAN_Context from "../../context/IBAN_Context";

function Form_IBAN() {

    const [IBAN_Input, setIBAN_Input] = useState('');

    const { IBAN, setIBAN, Validate } = useContext(IBAN_Context);

    useEffect(() => {

        Validate(IBAN);

    },[IBAN_Input])

    const handleSubmit = (event) => {
        event.preventDefault();
        setIBAN({ ...IBAN, IBAN: IBAN_Input });
        setIBAN_Input('');
    }

  return (
    <FormIBAN onSubmit={handleSubmit}>
       <label>
            <Input_IBAN 
                name="IBAN" 
                id="IBAN" 
                placeholder="Type IBAN ..."
                value={IBAN_Input}
                onChange={(event) => setIBAN_Input(event.target.value)}
                maxLength={34}
                required/>
        </label>
        <Input_Submit type="submit" value="Submit" /> 
    </FormIBAN>
  )
}

export default Form_IBAN;