import React, { useEffect, useState, useRef, useCallback } from 'react';
import { HtCard, TestiCard, VisibilitySensor } from './components/'
import Slider from "react-slick";
import logoHeader from './images/bitmap_2.png'
import logoHeader2 from './images/bitmap_2@2x.png'
import logoHeader3 from './images/bitmap_2@3x.png'
import heroImage from './images/bitmap.png'
import heroImage2 from './images/bitmap@2x.png'
import heroImage3 from './images/bitmap@3x.png'
import defImage from './images/group-4.png'
import defImage2 from './images/group-4@2x.png'
import defImage3 from './images/group-4@3x.png'
import defOval from './images/oval.svg'
import contentFooter from './images/group-3.png'
import contentFooter2 from './images/group-3@2x.png'
import contentFooter3 from './images/group-3@3x.png'



const testiObj = [
  {
    "id": "dv2o78l11m",
    "testimony": "I couldn't have asked for more than this. I wish I would have thought of it first. This is simply unbelievable!",
    "by": "Arron"
  },
  {
    "id": "903lf1itgt",
    "testimony": "Wow what great service, I love it! Without WEEKEND, we would have gone by now. You guys rock!",
    "by": "Kelsey"
  },
  {
    "id": "nj645u5e4a",
    "testimony": "I wish I would have thought of it first.",
    "by": "Steven"
  },
  {
    "id": "4rjtcb1wh0",
    "testimony": "Fantastic, I'm totally blown away by WEEKEND",
    "by": "Charley"
  },
  {
    "id": "qvt7jp8p3d",
    "testimony": "This is unbelievable. After using WEEKEND my business skyrocketed!",
    "by": "Vanessa"
  }
]

const helpObj = [
  {
    "id": "dbh6fghjgj",
    "title": "Start quickly with simple steps",
    "slug": "start-quickly-with-simple-steps",
    "image": "https://wknd-take-home-challenge-api.herokuapp.com/dbh6fghjgj.jpg"
  },
  {
    "id": "lgmd6ielxi",
    "title": "Run smoothly at vero eos et accusamus",
    "slug": "run-smoothly-at-vero-eos-et-accusamus",
    "image": "https://wknd-take-home-challenge-api.herokuapp.com/lgmd6ielxi.jpg"
  },
  {
    "id": "qlrl8c8xqg",
    "title": "Denounce with righteous indignation",
    "slug": "denounce-with-righteous-indignation",
    "image": "https://wknd-take-home-challenge-api.herokuapp.com/qlrl8c8xqg.jpg"
  }
]

const useContainerDimensions = myRef => {
  const getDimensions = useCallback(() => ({
    width: myRef.current.offsetWidth - 32,
    height: myRef.current.offsetHeight
  }),[myRef])

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions())
    }

    if (myRef.current) {
      setDimensions(getDimensions())
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [myRef, getDimensions])

  return dimensions;
};

function App() {
  const componentRef = useRef()
  const { width } = useContainerDimensions(componentRef)
  const slideSize = (width / 247)
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: slideSize.toFixed(2) - 0.05,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          infinite: false,
          arrows: true,
        }
      },
      {
        breakpoint: 1441,
        settings: {
          infinite: false,
          arrows: true,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          infinite: false,
          arrows: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          infinite: false,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: false,
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className="container">
      <header className="container__header">
        <img src={logoHeader}
          srcSet={`${logoHeader2}, ${logoHeader3}`}
          className="header-logo"
          alt="logo" />

        <div className="header-title">
          <p>Good Morning</p>
          <h1>Fellas</h1>
        </div>
      </header>

      <div className="container__hero">
        <h1>WEEKEND FROM HOME</h1>
        <p>Stay active with a little workout.</p>
        <div className="hero-img">
          <img src={heroImage}
            srcSet={`${heroImage2}, ${heroImage3}`}
            alt="hero-img" />

          <button className="img-button">Let's Go</button>
        </div>

      </div>

      <div className="container__definition">
        <img src={defImage}
          srcSet={`${defImage2}, ${defImage3}`}
          className="def-img"
          alt="def-img" />

        <p className="def-text"><strong>Deffinition;</strong> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.</p>
        <p className="def-author">-weekend team</p>
        <img src={defOval}
          className="def-oval" alt="def-oval" />
      </div>

      <div className="container__content">
        <div className="main-content">
          <VisibilitySensor once>
            {({ isVisible }) => (
              <div ref={componentRef} className={isVisible ? "content-item slider fadeIn enter" : "content-item slider fadeIn"}>
                <h1 className="item-title">Testimonial</h1>
                <Slider {...sliderSettings}>
                  {testiObj.map(value => (
                    <TestiCard key={value.id} testiObj={value} />
                  ))}
                </Slider>
              </div>
            )}
          </VisibilitySensor>
          <VisibilitySensor once>
            {({ isVisible }) => (
              <div className={isVisible ? "content-item fadeIn enter" : "content-item fadeIn"}>
                <h1 className="item-title">POV</h1>
                <p className="item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
              </div>
            )}
          </VisibilitySensor>
          <VisibilitySensor once>
            {({ isVisible }) => (
              <div className={isVisible ? "content-item fadeIn enter" : "content-item fadeIn"}>
                <h1 className="item-title">Resource</h1>
                <p className="item-desc">These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
              </div>
            )}
          </VisibilitySensor>
          <VisibilitySensor once partialVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "content-item help fadeIn enter" : "content-item help fadeIn"}>
                <h1 className="item-title">Help &amp; Tips</h1>
                <div className="ht-list">
                  {helpObj.map(value => (
                    <HtCard key={value.id} helpObj={value} />
                  ))}
                </div>
              </div>
            )}
          </VisibilitySensor>
          <VisibilitySensor once>
            {({ isVisible }) => (
              <div className={isVisible ? "content-item set fadeIn enter" : "content-item set fadeIn"}>
                <h1 className="item-title">You’re all set.</h1>
                <p className="item-desc">The wise man therefore always holds in these matters to this principle of selection.</p>
              </div>
            )}
          </VisibilitySensor>
        </div>
        <img src={contentFooter}
          srcSet={`${contentFooter2}, ${contentFooter3}`}
          className="content-footer"
          alt="content-footer" />
      </div>

      <footer className="container__footer">
        <p className="copyright"><b>wknd@</b>2020</p>
        <p className="version">alpha version 0.1</p>
      </footer>
    </div>
  );
}

export default App;
