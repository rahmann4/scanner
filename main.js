import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

const QRScanner = () => {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  <QrReader onScan={handleScan}/>
};

export default QRScanner;
