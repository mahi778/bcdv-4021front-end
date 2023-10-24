import React, { useState } from 'react';
import TransferComponent from './TransferComponent';
import ReceiptComponent from './RecieptComponent';

const App = () => {
  const [showReceipt, setShowReceipt] = useState(false);
  const [transactionData, setTransactionData] = useState(null);

  const toggleReceipt = (data) => {
    setTransactionData(data);
    setShowReceipt(!showReceipt);
  };

  return (
    <div className="App">
      <h1>Transfer App</h1>
      <TransferComponent toggleReceipt={toggleReceipt} />
      {showReceipt && <ReceiptComponent transactionData={transactionData} />}
    </div>
  );
};

export default App;

