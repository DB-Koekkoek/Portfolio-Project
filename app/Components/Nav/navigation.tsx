import Link from 'next/link';
import './navigation.css';
import gifImage from '@/public/giphy.gif';
import { useState } from 'react';
import picture1 from '@/public/2.gif'
import picture2 from '@/public/1.gif'
import picture3 from '@/public/3.gif'
import picture4 from '@/public/4.gif'
import Hamburger from './hamburger';



export default function Navigation() {
    const [showPicture1, setShowPicture1] = useState(false)
    const [showPicture2, setShowPicture2] = useState(false)
    const [showPicture3, setShowPicture3] = useState(false)
    const [showPicture4, setShowPicture4] = useState(false)


    return (
        <nav >
        <Hamburger />
            <ul className='navigation-box'>
                <li className='navigation-list'>
                <Link href='/about-me' onMouseEnter={() => setShowPicture1(true)} onMouseLeave={() => setShowPicture1(false)} >About Me</Link>
                    {showPicture1 && <img className='picture-landing' src={picture1.src} alt='Hallo!'/>}
                </li>

                <li className='navigation-list'>
                <Link href='/about-me' onMouseEnter={() => setShowPicture2(true)} onMouseLeave={() => setShowPicture2(false)} >Portfolio</Link>
                    {showPicture2 && <img className='picture-landing' src={picture2.src} alt='Hallo!'/>}
                </li>

                <li className='navigation-list'>
                <Link href='/about-me' onMouseEnter={() => setShowPicture3(true)} onMouseLeave={() => setShowPicture3(false)} >Resume</Link>
                    {showPicture3 && <img className='picture-landing' src={picture3.src} alt='Hallo!'/>}
                </li>

                <li className='navigation-list'>
                <Link href='/about-me' onMouseEnter={() => setShowPicture4(true)} onMouseLeave={() => setShowPicture4(false)} >Contact</Link>
                    {showPicture4 && <img className='picture-landing' src={picture4.src} alt='Hallo!'/>}
                </li>
            </ul>
        </nav>
    );
}
