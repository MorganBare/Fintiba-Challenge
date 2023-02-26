/* eslint-disable react/jsx-pascal-case */
import { createContext, useState } from 'react'

const IBAN_State = {
    IBAN: '',
    isValid: false,
    errors: {
        checkSum: true,
        length: true,
        format: true
    }
}

const IBAN_Context = createContext(IBAN_State);

export const IBAN_Provider = ({ children }) => {
    const [IBAN, setIBAN] = useState(IBAN_State);

    const checkLength = async (data) => {
        const CleanedIBAN = data.IBAN.replace(/\s/g, "").toUpperCase();
        return new Promise((resolve, reject) => {
            if(CleanedIBAN.length === 21) {
                resolve(false);
            }
        })
        //if(CleanedIBAN.length === 21) {
            //setIBAN({ ...IBAN, errors: {...IBAN.errors, length: false} });
        //} else {
            //console.log('no length')
        //}
    }

    const checkFormat = async (data) => {
        const CleanedIBAN = data.IBAN.replace(/\s/g, "").toUpperCase();
        const regex = /LI\d{17}[A-Z]{2}/;
        return new Promise((resolve, reject) => {
            if(CleanedIBAN.match(regex)){
                resolve(false);
            }
        })
    }
        /* if(CleanedIBAN.match(regex)){
            setIBAN({ ...IBAN, errors: {...IBAN.errors, format: false} });
            console.log('ok')
        } else {
            console.log('no format')
        }*/

    const checkCheckSum = async (data) => {
        const CleanedIBAN = data.IBAN.replace(/\s/g, "").toUpperCase();
        const splitIBAN = CleanedIBAN.split('');

        return new Promise((resolve, reject) => {
            if(splitIBAN.slice(2,4).join('') === '21') {
                resolve(setIBAN({ ...IBAN, errors: {...IBAN.errors, checkSum: false} }));
            }
        })
        /*if(splitIBAN.slice(2,4).join('') === '21') {
            setIBAN({ ...IBAN, errors: {...IBAN.errors, checkSum: false} });
        } else {
            console.log('jgdfg')
        }*/
    } 

    const Validate = async (data) => {
        Promise.allSettled([checkLength(data), checkFormat(data), checkCheckSum(data)]).then((results) => console.log(results))
        };

    return (
        <IBAN_Context.Provider value={{ IBAN, setIBAN, checkCheckSum, checkFormat, checkLength, Validate}}>
            {children}
        </IBAN_Context.Provider>
    )
}

export default IBAN_Context