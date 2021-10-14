import React, { useState } from 'react'
import download from './lib/download';
import QRCode from 'qrcode.react'

export default function Home() {

  const [qrcode, setqrcode] = useState('')

  return (
    <div className="center">
      <h1>QR Code Generator</h1>
      <h6>Just insert your text below to generate your QR Code</h6>
      <input type="text" value={qrcode} placeholder="Type Here" maxLength={1273} onChange={e => setqrcode(e.target.value)}/>
      <QRCode id="qrcode" value={qrcode} size={300} level={"H"} includeMargin={true} />
      <button onClick={download}> Download </button>
      <footer>
        <p>Made with ❤️ by <a href='https://github.com/gabacode' target='_blank' rel='noreferrer'>@gabacode</a></p>
      </footer>
    </div>
  );
}