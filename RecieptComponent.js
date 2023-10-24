import React from 'react';

const ReceiptComponent = ({ transactionData }) => {
  return (
    <div>
      <h2>Transaction Receipt</h2>
      <p>Amount: {transactionData.amount}</p>
      <p>Source Account: {transactionData.sourceAccount}</p>
      <p>Destination Account: {transactionData.destinationAccount}</p>
      <p>Transaction Hash: {transactionData.transactionHash}</p>
      <p>Gas Used: {transactionData.gasUsed}</p>
      <p>Number of Blocks: {transactionData.numberOfBlocks}</p>
      <p>Block Number: {transactionData.blockNumber}</p> 
    </div>
  );
};

export default ReceiptComponent;
