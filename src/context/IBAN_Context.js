/* eslint-disable react/jsx-pascal-case */
import { createContext, useState } from 'react'

import bigInt from 'big-integer';

const IBAN_State = {
    IBAN: '',
    isValid: false,
}

const IBAN_Context = createContext(IBAN_State);

export const IBAN_Provider = ({ children }) => {
    const [IBAN, setIBAN] = useState(IBAN_State);


    const checkSum = (parm) => {

        // letter-number values used when generating or checking IBANs
        const LetterConversion = {
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15,
            G: 16,
            H: 17,
            I: 18,
            J: 19,
            K: 20,
            L: 21,
            M: 22,
            N: 23,
            O: 24,
            P: 25,
            Q: 26,
            R: 27,
            S: 28,
            T: 29,
            U: 30,
            V: 31,
            W: 32,
            X: 33,
            Y: 34,
            Z: 35
        }

        // Split the IBAN
        const splitIBAN = parm.split('');
        // Grab the first four characters
        const firstFourCharacters = splitIBAN.slice(0,4).join('');
        // Move those four characters to the end
        const rearrangedIBAN = splitIBAN.slice(4).join('') + firstFourCharacters;
        // Split the string again so we can loop through it
        const splitRearrangedIBAN = rearrangedIBAN.split('');

        // Loop over IBAN string
        for (let i in splitRearrangedIBAN) {
            // Loop over the etter-number object
            for (let j in LetterConversion){
                
                // If there is a letter then replace it with the correct number value
                if (splitRearrangedIBAN[i] === j){
                    
                    splitRearrangedIBAN[i] = LetterConversion[j].toString();
                    
                }
            }
        }

        // Turn the new IBAN with only numbers back into a string
        const checkIBAN = splitRearrangedIBAN.join('');

        // Use the bigInt library to help turn the string into a number that is not in scientific notation and use modulo to find the remainder
        const num = bigInt(checkIBAN).mod(97);

        if (num.value === 1n){
            return true
        } else {
            return false
        }
    }

    const Validate = (data) => {

        // remove all spaces and switch to uppercase
        const CleanedIBAN = data.IBAN.replace(/\s/g, "").toUpperCase();
        // IBAN format in a regex expression
        const regex = /LI\d{17}[A-Z]{2}/;

        checkSum(CleanedIBAN);

        /*Check if the IBAN is exactly 21 characters long, has a correct format, and the checksum is valid*/
        if(CleanedIBAN.length === 21 && CleanedIBAN.match(regex) && checkSum(CleanedIBAN)) {
                setIBAN({ ...IBAN, isValid: true });
        
        } else {
            setIBAN({ ...IBAN, isValid: false });
        }
    }

    return (
        <IBAN_Context.Provider value={{ IBAN, setIBAN, Validate}}>
            {children}
        </IBAN_Context.Provider>
    )
}

export default IBAN_Context