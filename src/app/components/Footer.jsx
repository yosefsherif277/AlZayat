"use client";

export default function Footer(){
    return (
    <footer>
        <div id="quick">
            <div className="aboutus">
                <h3>About us</h3>
                <p>
                    Our school is a school for basic education (kindergarten, primary, and preparatory),
                     It is named after the pride of Damietta, Dr. Mohamed 
                    Hassan Al-Zayat. From 1997, The students of this school have excelled
                     in various fields, competing with many 
                    schools at the governorate level and even at the national level!
                </p>
            </div>
            <div className="quicklinks">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contactus">Contact with us</a></li>
                </ul>
                <div>
                    <a href="https://www.facebook.com/share/g/194v4Ry7qw/" target="_blank"><img src="/icons/facebook-brands.svg" alt="FaceBook" /></a>
                    <a href="https://maps.app.goo.gl/isxUtNNcwRhijkTa6" target="_blank"><img src="/icons/location-dot-solid.svg" alt="School location" /></a>
                </div>
            </div>
            <div className="contactwithus">
                <h3>Contact with us</h3>
                <p><b>Phone: </b><u><i></i></u></p>
                <p><b>E-mail: </b><u><i></i></u></p>
            </div>
        </div>
        <div className="footer">
            <h5>© 2025 | All rights reserved | Created by: <b title="Telephone: 01067370955, E-mail: yasherif92@gmail.com"><u><i>"Youssef Sherif"</i></u></b></h5>
        </div>
    </footer>
    );
}