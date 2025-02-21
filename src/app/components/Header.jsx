// import { useState } from "react";

// export default function Header(){
//     return (
//         <>
//             <header id="home">
//                 <div className="navbar">
//                     <nav>
//                         <div className="logo-box">
//                             <img src='/imgs/logo.ico' alt="شعار المدرسة School icon" className="logo-img" />
//                         </div>
//                         <NavUl />
//                     </nav>
//                 </div>
//             </header>
//             <BurgerNav />
//         </>
//     );
// }
// function NavUl(){
//     return(
//         <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#skills">Skills</a></li>
//             <li><a href="#contact">Contact us</a></li>
//             <div id="lang"><h3>ع</h3></div>
//         </ul>
//     );
// }
// function BurgerNav(){
//     const [IsOpen, setIsOpen] = useState(false);
//     const toggleIsOpen = () => {
//       setIsOpen((prevIsOpen) => !prevIsOpen); // عكس القيمة الحالية
//     };
//     return (
//         <div className="burger">
//             <button id="burgerBtn" className={IsOpen ? "open checked" : "closed"} onClick={toggleIsOpen}>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </button>
//             <div className="burger-nav">
//                 <ul>
//                     <li><a href="#home"><img src='/icons/house-solid.svg' /> home</a></li>
//                     <li><a href="#about"><img src='/icons/address-card-solid.svg' /> about</a></li>
//                     <li><a href="#skills"><img src='/icons/brain-solid.svg'/> skills</a></li>
//                     <li><a href="#contact"><img src='/icons/users-solid.svg' /> contact</a></li>
//                     <div id="lang"><h3>ع</h3></div>
//                 </ul>
//             </div>
//         </div>
//     );
// }
// src/app/header.js
'use client';

import { useState } from "react";

export default function Header() {
    return (
        <>
            <header id="home">
                <div className="navbar">
                    <nav>
                        <div className="logo-box">
                            <img src='/imgs/logo.ico' alt="شعار المدرسة School icon" className="logo-img" />
                        </div>
                        <NavUl />
                    </nav>
                </div>
            </header>
            <BurgerNav />
        </>
    );
}

function NavUl() {
    return (
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact us</a></li>
            <div id="lang"><h3>ع</h3></div>
        </ul>
    );
}

function BurgerNav() {
    const [IsOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen); // عكس القيمة الحالية
    };

    return (
        <div className="burger">
            <button
                id="burgerBtn"
                className={IsOpen ? "open checked" : "closed"}
                onClick={toggleIsOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="burger-nav">
                <ul>
                    <li>
                        <a href="#home">
                            <img src='/icons/house-solid.svg' alt="Home Icon" /> Home
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            <img src='/icons/address-card-solid.svg' alt="About Icon" /> About
                        </a>
                    </li>
                    <li>
                        <a href="#skills">
                            <img src='/icons/brain-solid.svg' alt="Skills Icon" /> Skills
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <img src='/icons/users-solid.svg' alt="Contact Icon" /> Contact
                        </a>
                    </li>
                    <div id="lang"><h3>ع</h3></div>
                </ul>
            </div>
        </div>
    );
}