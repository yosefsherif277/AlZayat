"use client";

import "./css/main.css";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const sliderRef = useRef(null); // لإشارة عنصر ul (#slul)
  const slidesRef = useRef([]); // لإشارة العناصر (.slide)

  // حالة لإدارة المؤشر i
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // عند الضغط على زر الإيقاف/تشغيل
  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  // تحريك السلايدر إلى اليمين
  const moveRight = () => {
    const nextIndex = (currentIndex + 1) % slidesRef.current.length;
    setCurrentIndex(nextIndex);
  };

  // تحريك السلايدر إلى اليسار
  const moveLeft = () => {
    const prevIndex = (currentIndex - 1 + slidesRef.current.length) % slidesRef.current.length;
    setCurrentIndex(prevIndex);
  };

  // التغيير التلقائي للصور
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        moveRight();
      }
    }, 2000);

    return () => clearInterval(interval); // تنظيف interval عند فك التحميل
  }, [currentIndex, isPaused]);

  // تحديث transform بناءً على المؤشر الحالي
  useEffect(() => {
    if (sliderRef.current) {
      const xValue = -200 * currentIndex;
      sliderRef.current.style.transform = `translateX(calc(50% - 140px + ${xValue}px))`;
    }
  }, [currentIndex]);

  return (
    <>
      {/* header content start */}
      <div id="home" className="content">
        <div className="overlay"></div>
        <div className="imgbox">
          <img src="/imgs/homeimg.jpg" alt="مدرسة د.محمد حسن الزيات" />
        </div>
        <div className="text-content">
          <h2>Welcome to our school, We hope you enjoy your time</h2>
          <a href="#about" className="btn-primary">
            About us <img src="/icons/address-card-solid.svg" alt="address carg image"/>
          </a>
        </div>
      </div>
      {/* header content end */}

      <main>
        {/* about section start */}
        <section id="about">
          <div className="container">
            <h2>About us</h2>
            <hr />
            <div id="about-content">
              <div className="col-1">
                <h3>
                  <span className="text-primary">Dr. Mohammed Hassan Al-Zayat school</span>
                </h3>
                <p id="discription">
                  It is a school for basic education (kindergarten, primary and
                  Preparatory), that ancient school was established in 1997, and
                  it is classNamed after the pride of Damietta, Dr. Mohamed Hassan
                  Al-Zayat: former Minister of Foreign Affairs of Egypt before
                  the outbreak of the October 1973 war, and the husband of Mrs.
                  Amina, daughter of the Dean of Arabic Literature, "Taha
                  Hussein", and the sons of this school excelled in various
                  fields and raced many schools at the governorate level and
                  even at the level of the Republic!!
                </p>
              </div>
              <div className="col-2">
                <p className="social">
                  <b>Social media:</b>{" "}
                  <a
                    href="https://www.facebook.com/share/g/194v4Ry7qw/"
                    target="_blank"
                  >
                    <img src="/icons/facebook-brands.svg"/>
                  </a>
                  {" "}facebook
                </p>
                <p id="place">
                  <b>place:</b>{" "}
                  <a href="https://maps.app.goo.gl/isxUtNNcwRhijkTa6" target="_blank">
                    <img src="/icons/location-dot-solid.svg"/>
                  </a>{" "}
                  Othman Bin Affan Street, New Damietta City, Kafr Saad,
                  Damietta Governorate
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* about section end */}

        {/* skills section start */}
        <section id="skills">
          <div className="container">
            <h2>
              Skills &amp; <span className="text-primary">Talents</span>
            </h2>
            <hr />
            <br />
            <div id="slider">
              <ul id="slul" ref={sliderRef}>
                {[...Array(12)].map((_, index) => (
                  <li
                    key={index}
                    className={`slide ${currentIndex === index ? "active" : ""}`}
                    ref={(el) => (slidesRef.current[index] = el)}
                  >
                    <img src={`/imgs/skills/${index + 1}.jpg`} alt={`Skill ${index + 1}`} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="controls">
              <button id="arrow-left" className="controls-btns" onClick={moveLeft}><b>←</b></button>
              <button id="turn-on-off" onClick={togglePause} className="controls-btns">
                {isPaused ? (
                  <img src="/icons/play-solid.svg" />
                ) : (
                  <img src="/icons/pause-solid.svg" />
                )}
              </button>
              <button id="arrow-right" className="controls-btns" onClick={moveRight}><b>→</b></button>
            </div>
          </div>
        </section>
        {/* skills section end */}
        {/* contact us start */}
        <div id="contactus">
          <div className="container">
            <h2>
              Contact<span className="text-primary"> us</span>
            </h2>
            <hr />
            <div className="contact-content">
              <div className="contactimgbox">
                <img src="/imgs/contact_us.png" alt="contact us" />
              </div>
              <div className="contact-text">
                <form className="form" method="post" action="alzayat1.php">
                  <div className="descr">
                    <p>Contact us</p>
                  </div>
                  <div className="input">
                    <input required id="className" type="text" />
                    <label htmlFor="className">Name</label>
                  </div>
                  <div className="input">
                    <input required className="email" id="email" type="email" />
                    <label htmlFor="email">E-mail</label>
                  </div>
                  <div className="input">
                    <textarea required cols="30" rows="1" id="message"></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                  <button className="btn-primary">Send message →</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* contact us end */}
      </main>
    </>
  );
}