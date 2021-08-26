import React, {useState} from 'react';
import './Links.css'

export const Links = () => {
    const [language, setLanguage] = useState('spanish');

    const navSpanish = ['Sobre mi', 'Proyectos realizados','Contactame!'];
    const navEnglish = ['About me', 'Projects','Contact Me!']
    return (
        <div className='navbar'>
            <ul>
                 {language === 'spanish' ? (
                    navSpanish.map((cat) => <li key={cat}><a href={`#${cat}`}> {cat} </a> </li>)
                 ) : 
                 (
                    navEnglish.map((cat) => <li><a href={`#${cat}`}> {cat} </a> </li>)
                 )}
            </ul>
        </div>
    )
}