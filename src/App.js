import "./App.css";
import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const generateQrCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 600,
        margin: 2,
      },
      (err, url) => {
        if (err) return console.error(err);
        console.log(url);
        setQrcode(url);
      }
    );
  };
  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <div className="flex-container">
        <input
          type="url"
          name="website-input"
          id="website-input"
          placeholder="e.g https://yourwebsite.com"
          required
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <button id="generate-btn" onClick={generateQrCode}>
          Generate
        </button>
      </div>
      {qrcode && (
        <>
          <img src={qrcode} alt="" className="qr-img" />
          <a href={qrcode} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
