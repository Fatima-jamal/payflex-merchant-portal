import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./GenerateQR.css"; // optional, for custom styles

const GenerateQR = () => {
  const [merchantId, setMerchantId] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [qrData, setQrData] = useState("");

  const handleGenerate = () => {
    const payload = JSON.stringify({
      merchantId,
      amount,
      description,
    });
    setQrData(payload);
  };

  return (
    <div className="qr-container">
      <h2>Generate Payment QR Code</h2>

      <label>Merchant ID:</label>
      <input
        type="text"
        value={merchantId}
        onChange={(e) => setMerchantId(e.target.value)}
      />

      <label>Amount:</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleGenerate}>Generate QR</button>

      {qrData && (
        <div className="qr-code-box">
          <QRCode value={qrData} size={200} />
        </div>
      )}
    </div>
  );
};

export default GenerateQR;
