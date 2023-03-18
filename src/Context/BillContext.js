import React, { useState, createContext, useEffect } from "react";

const BillContext = createContext();

const BillProvider = ({ children }) => {
  const [bills, setBills] = useState([]);

  const updateBills = (bill) => {
    localStorage.setItem()
    console.log(bill);
  };

  return (
    <BillContext.Provider
      value={{
        bills,
        updateBills,
      }}
    >
      {children}
    </BillContext.Provider>
  );
};

export { BillContext, BillProvider };
