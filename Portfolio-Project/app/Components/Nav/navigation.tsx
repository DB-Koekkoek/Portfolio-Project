import Link from 'next/link';
import './navigation.css';
import gifImage from '@/public/giphy.gif';
import { useState } from 'react';

export default function Navigation() {
    const [showPicture, setShowPicture] = useState(false)

    return (
        <nav className='navigation-box'>
            <ul>
                <li className='navigation-list'>
                    <Link href='/about-me'>About Me</Link>
                </li>

                <li className='navigation-list'>
                    <Link href='/portfolio'>Portfolio</Link>
                </li>

                <li className='navigation-list'>
                    <Link href='/resume'>Resume</Link>
                </li>

                <li className='navigation-list'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
