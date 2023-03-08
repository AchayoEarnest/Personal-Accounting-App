import React, { useState } from "react";

const AddBill = () => {
  const [newBillTitle, setNewBillTitle] = useState("");
  const [newBillCost, setNewBillCost] = useState("");

  const billObjectValid = () => {
    const validTitle =
      newBillTitle && newBillTitle.split('').find(char => char !== ' ');
    const validCost = newBillCost && Number.parseFloat(newBillCost);

    return validTitle && validCost;
  };

  const updateData = () => {
    console.log(newBillTitle, newBillCost);
  };

  const clearBill = () => {
    setNewBillCost("");
    setNewBillTitle("");
  };

  return (
    <div>
      <input
        className="w-full h-9 pl-5 border"
        placeholder="Enter bill title"
        type="text"
        value={newBillTitle}
        onChange={(e) => setNewBillTitle(e.target.value)}
      />
      <input
        className="w-full h-9 pl-5 border"
        placeholder="Enter bill cost"
        type="number"
        value={newBillCost}
        onChange={(e) => setNewBillCost(e.target.value)}
      />
      <button
        className="flex bg-blue-500 text-white px-6 py-2 rounded-md mx-auto my-4"
        onClick={() => {
          if (billObjectValid()) {
            updateData();
            clearBill();
          }
        }}
      >
        Add Bill
      </button>
    </div>
  );
};

export default AddBill;
