import React, {useState, useEffect} from 'react'
import ReactCSSTransitionGroup from 'react-transition-group';
import Fade from 'react-reveal/Fade';

import desk1 from './images/desktop-image-hero-1.jpg'
import desk2 from './images/desktop-image-hero-2.jpg'
import desk3 from './images/desktop-image-hero-3.jpg'

import mobile1 from './images/mobile-image-hero-1.jpg'
import  mobile2 from './images/mobile-image-hero-2.jpg'
import  mobile3 from './images/mobile-image-hero-3.jpg'
import logo from './images/logo.svg'
import hamburger from './images/icon-hamburger.svg'
import cross from  './images/icon-close.svg'
import buttonLeft from './images/icon-angle-left.svg'
import buttonRight from './images/icon-angle-right.svg'
import shopArrow from './images/icon-arrow.svg'
import aboutLight from './images/image-about-light.jpg'
import aboutDark from './images/image-about-dark.jpg'

import './styles/index.css'

function App() {
  const [size, setSize] = useState(window.innerWidth)
  const [open, setOpen] = useState(true)
  const [slide, setSlide] = useState(0)
  useEffect(() => {
    window.addEventListener('resize', () => {
  
      setSize(window.innerWidth)
    })
  })

const [images, setImages] = useState(
  {
    desk: [desk1, desk2, desk3],
    mobile: [mobile1, mobile2, mobile3]
  }

)
const [caps, setCaps] = useState( {
  title: [
    `Discover innovative ways to decorate`,
    `  We are available all across the globe`,
    `  Manufactured with the best materials`
  ],
  article: [
    `We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form and function in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.`,
    `  With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.
  `,
    `  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.
  `
  ]
}


)
  const handleSlide = (dir) => {

  
    if(dir == 'LEFT') 
    {
      if(slide <= 0) return setSlide(2)
      setSlide(slide - 1)
    } 
    
    if(dir == 'RIGHT')
    {
      if(slide >= 2) return setSlide(0)
      setSlide(slide + 1)
    } 
 
  }
  const navOpen = () => {
    const ul = document.querySelector('ul.mobileUl')
    setOpen(prev => !prev)
    if(open) ul.style.top = '0'
    if(!open) ul.style.top = '-100%'



  }
  return ( 
    <div className="app">
    {!open &&  <div className="openDark"></div>} 
    <section className="topZone">
      {size > 441 ?
          <nav className = 'deskNav'>
 
     
          <img src= {logo} alt=""/>
         <ul>
          
            <li> <a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        :
        <nav className = 'mobileNav'>
        <img className = 'hamb' onClick = {navOpen} src= {!open ? cross : hamburger} alt="" />
        <img src= {logo} alt=""/>
        
       <ul className = 'mobileUl'>
       
          <li> <a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    }
  

      <div className="slideElement">
    
      <img src= {size > 440 ? images.desk[slide] : images.mobile[slide]} alt=""/>
   
        <div className="slideButtons">
          <button onClick = {() => handleSlide("LEFT")}>
              <img  src={buttonLeft} alt=""/>
          </button>
          <button onClick = {() => handleSlide("RIGHT")}>
            <img src= {buttonRight} alt=""/>
          </button>
        </div>
      </div>

      <div className="headerZone">
        <div className="headWraper">
      
          <h1>
          {caps.title[slide]}
          </h1>
         
          <article>
            <p>
            {caps.article[slide]}
            </p>
          </article>
          <a href="#">
            Shop now
            <img src= {shopArrow} alt=""/>
          </a>
        </div>
    
      </div>

    </section>
    <section className="botZone">
        <img src={aboutDark} alt=""/>
          <div className="aboutZone">
            <div className="aboutWrap">
              <h2>   About our furniture    </h2>
              <article>
                <p>
                  Our multifunctional collection blends design and function to suit your individual taste.
                  Make each room unique, or pick a cohesive theme that best express your interests and what
                  inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                  or anything in between. Product specialists are available to help you create your dream space.
                </p>
              </article>
            </div>
       
          </div>
        <img src= {aboutLight} alt=""/>
    </section>
  </div>
  );
}

export default App;
