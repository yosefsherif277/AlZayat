import "./css/main.css";

export default function Home() {
  return (
    <main>
         {/* about section start */}
        <section id="about">
            <div className="container">
                <h2>About us</h2>
                <hr/>
                <div id="about-content">
                    <div className="col-1">
                        <h3><span className="text-primary">Dr. Mohammed Hassan Al-Zayat school</span></h3>
                        <p id="discription">It is a school for basic education (kindergarten, primary and Preparatory), that ancient school was established
                             in 1997, and it is named after the pride of Damietta, Dr. Mohamed Hassan Al-Zayat: former 
                             Minister of Foreign Affairs of Egypt before the outbreak of the October 1973 war, and the husband of Mrs. Amina,
                              daughter of the Dean of Arabic Literature, "Taha Hussein", and the sons of this school excelled in 
                            various fields and raced many schools at the governorate level and even at the level of the Republic!!</p>
                    </div>
                    <div className="col-2">
                        <p className="social"><b>Social media:</b> <a href="https://www.facebook.com/share/g/194v4Ry7qw/" target="_blank">
                            <i className="fa-brands fa-facebook"></i></a><span>facebook</span></p>
                        <p id="place"><b>place:</b> <a href="https://maps.app.goo.gl/isxUtNNcwRhijkTa6" target="_blank"><i className="fa-solid fa-map-location-dot"></i></a> Othman Bin Affan Street, New Damietta City, Kafr Saad, Damietta Governorate  </p>
                    </div>
                </div>
            </div>
          </section>
         {/* about section end */}
          {/* skills section start  */}
         <section id="skills">
            <div className="container">
                <h2>Skills &amp; <span className="text-primary">Talents</span></h2>
                <hr/>
                <br/>
                <div id="slider">
                    <ul id="slul">
                        <li className="slide active"><img src="" alt=""/></li>
                        <li className="slide"><img src="" alt=""/></li>
                        <li className="slide"><img src="" alt=""/></li>
                        <li className="slide"><img src="" alt=""/></li>
                        <li className="slide"><img src="" alt=""/></li>
                        <li className="slide"><img src="" alt=""/></li>
                        <li className="slide"><img src="" alt=""/></li>
                        <li className="slide"><img src="" alt=""/></li>
                        <li className="slide"><img src="" alt=""/></li>
                        <li className="slide"><img src="" alt=""/></li>
                        <li className="slide"><img src="" alt=""/></li>
                        <li className="slide"><img src="" alt=""/></li>
                    </ul>
                </div>
                <div className="controls">
                    <button id="arrow-left" className="controls-btns" onclick="movetoleft()"><i className="fa-solid fa-arrow-left"></i></button>
                    <button id="turn-on-off" onclick="turnonoff()" className="controls-btns"><i className="fa-solid fa-pause"></i></button>
                    <button id="arrow-right" className="controls-btns" onclick="movetoright()"><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
         </section>
          {/* skills section end  */}
         {/* contact us start  */}
        <div id="contactus">
            <div className="container">
                <h2>Contact<span className="text-primary"> us</span></h2>
                <hr/>
                <div className="contact-content">
                    <div className="contactimgbox"><img src="imgs/contact_us.png" alt="contact us"/></div>
                    <div className="contact-text">
                        <form className="form" method="post" action="alzayat1.php">
                            <div className="descr"><p>Contact us</p></div>
                            <div className="input">
                                <input required id="name" type="text"/>
                                <label for="name">Name</label>
                            </div>
                            <div className="input">
                                <input required name="email" id="email" type="email"/>
                                <label for="email">E-mail</label>
                            </div>
                            <div className="input">
                                <textarea required="" cols="30" rows="1" id="message"></textarea>
                                <label for="message">Message</label>
                            </div>
                            <button className="btn-primary">Send message →</button>
                          </form>
                    </div>
                </div>
                
            </div>
        </div>
         {/* contact us end  */}
    </main>
  );
}