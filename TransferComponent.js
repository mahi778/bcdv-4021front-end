import React, { useState } from 'react';
import crypto from 'crypto-js';

const generateRandomEthereumAddress = () => {
  const characters = '0123456789abcdef';
  let address = '0x';

  for (let i = 0; i < 40; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    address += characters[randomIndex];
  }

  return address;
};

const TransferComponent = ({ toggleReceipt }) => {
  const [amount, setAmount] = useState('');
  const sourceAccount = generateRandomEthereumAddress();
  const destinationAccount = generateRandomEthereumAddress();

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const gasUsed = Math.floor(Math.random() * 1000); // Generate a random gas used value
    const numberOfBlocks = Math.floor(Math.random() * 10); // Generate a random number of blocks
    const blockNumber = Math.floor(Math.random() * 10000);
    const transactionHash = crypto.SHA256(amount + sourceAccount + destinationAccount).toString();

    toggleReceipt({
      amount,
      sourceAccount,
      destinationAccount,
      transactionHash,
      gasUsed,
      numberOfBlocks,
      blockNumber,
    });
  };

  return (
    <div>
      <div>
        <p>Source Account: {sourceAccount}</p>
        <p>Destination Account: {destinationAccount}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={amount}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TransferComponent;





