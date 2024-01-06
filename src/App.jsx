import './App.css'
import qrcode from './assets/qrcode.png';

function App() {
  return (
    <div className='card'>
      <img src={qrcode} alt='qr code'/>
      <h1>Improve your front-end skills by building projects</h1>
      <p>Scan the QR code to visit Frontend Mentor and
        take your coding skills to the next level
      </p>
    </div>
  )
}

export default App
