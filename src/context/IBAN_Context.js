/* eslint-disable react/jsx-pascal-case */
import { createContext, useState } from "react";

const IBAN_State = {
  IBAN: "",
  isValid: false,
  errors: {
    checkSum: true,
    length: true,
    format: true,
  },
};

const IBAN_Context = createContext(IBAN_State);

export const IBAN_Provider = ({ children }) => {
  const [iban, setIban] = useState(IBAN_State);

  //Rewrote checkLength, checkFormat and checkCheckSum functions to be synchronous.
  // They now have a boolean value indicating whether the corresponding validation check passed or failed.

  const checkLength = (iban) => {
    const cleanedIban = iban.replace(/\s/g, "").toUpperCase();
    return cleanedIban.length === 21;
  };

  const checkFormat = (iban) => {
    const cleanedIban = iban.replace(/\s/g, "").toUpperCase();
    const regex = /^LI\d{17}[A-Z]{2}$/;
    return regex.test(cleanedIban);
  };

  const checkCheckSum = (iban) => {
    const cleanedIban = iban.replace(/\s/g, "").toUpperCase();
    const numericIban = cleanedIban
      .slice(4)
      .split("")
      .map((char) => {
        const code = char.charCodeAt(0);
        return code >= 65 && code <= 90 ? code - 55 : char;
      })
      .join("");

    const mod97 = numericIban
      .match(/.{1,7}/g)
      .reduce((checksum, chunk) => parseInt(checksum + chunk) % 97, "");

    return mod97 === 1;
  };

  /* The validate function now performs all three validation checks and updates
   the isValid and errors properties of the iban state object accordingly. */

  const validate = (iban) => {
    const validLength = checkLength(iban);
    const validFormat = checkFormat(iban);
    const validCheckSum = checkCheckSum(iban);

    setIban({
      ...iban,
      isValid: validLength && validFormat && validCheckSum,
      errors: {
        length: !validLength,
        format: !validFormat,
        checkSum: !validCheckSum,
      },
    });
  };

  return (
    <IBAN_Context.Provider
      value={{
        iban,
        setIban,
        checkCheckSum,
        checkFormat,
        checkLength,
        validate,
      }}
    >
      {children}
    </IBAN_Context.Provider>
  );
};

export default IBAN_Context;
