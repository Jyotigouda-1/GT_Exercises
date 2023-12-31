import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
// Function to decode the encrypted string into an object
const decodeString = (encodedString) => {
  const [firstName, lastName, id] = encodedString.split(/0+/).filter(Boolean);
  return {
    first_name: firstName,
    last_name: lastName,
    id,
  };
};
const App = () => {
  // State to store the encoded message and the decrypted message
  const [encodedMessage, setEncodedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] =useState('');
  // Function to handle decoding when the "Decode" button is clicke
  const handleDecode = () => {
    const decodedData = decodeString(encodedMessage);
    setDecryptedMessage(JSON.stringify(decodedData, null, 2));
  };
  //Form
  return (
    <div className="container mt-5">
      <center><h1>Encrypted Message Decoder</h1></center>
      <div className="mb-3">
        <label htmlFor="encodedMessage" className="form-label">Enter the encrypted message:</label>
        <input
          type="text"
          className="form-control"
          id="encodedMessage"
          value={encodedMessage}
          onChange={(e) => setEncodedMessage(e.target.value)}
        />
      </div>
      <center><button className="btn btn-primary" onClick={handleDecode}>Decode</button></center>
      <div className="mt-3">
        <p className='form-label'>Decrypted Message:</p>
        <pre>{decryptedMessage}</pre>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
};
export default App;
