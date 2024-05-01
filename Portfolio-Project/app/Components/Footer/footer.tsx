import react, { useState} from 'react';
import './footer.css'
import gifImage from '@/public/giphy.gif';

function Footer() {
    const [showImage, setShowImage] = useState(false);
    
    return (
        <footer className='footer-box'>
            <div style={{ display: "flex" }}>           
             <p className='footer-meme' onMouseEnter={() => setShowImage(true)} onMouseLeave={() => setShowImage(false)}> Footer! </p>
                {showImage && <img className='meme-picture' src={gifImage.src} alt='waarom doet het het niet' />}
                </div>
        </footer>
    )
}

export default Footer