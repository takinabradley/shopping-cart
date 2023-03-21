import React from "react"
import "./Hero.scss"

function Hero({ image, heading, blurb, handleClick, className }) {
  return (
    <div className={`hero ${className}`}>
      <div className="hero__img-container">
        <img src={image} alt="featured product" className="hero__img" />
      </div>

      <div className="hero__info">
        <h2 className="hero__heading">{heading}</h2>
        <p className="hero__blurb">{blurb}</p>
        <button className="hero__learn-more" onClick={handleClick}>
          Learn More!
        </button>
      </div>
    </div>
  )
}

export default Hero