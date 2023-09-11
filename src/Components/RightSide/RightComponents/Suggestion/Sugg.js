import React from 'react'
import Simg1 from "../../../../assets/Suggestion/img-1.jpg"
import Simg2 from "../../../../assets/Suggestion/img-2.jpg"
import "../Suggestion/Sugg.css"

const Sugg = () => {
  return (
    <div className="Sugg-comp">
      <h2>Suggestion For You</h2>

      <div className="sugg-people">
        <div className="s-left">
          <img src={Simg1} alt="" />
          <h3>Cristiano Ronaldo</h3>
        </div>

        <div className="s-right">
          <button>Follow</button>
          <button>Dismiss</button>
        </div>
      </div>

      <div className="sugg-people">
        <div className="s-left">
          <img src={Simg2} alt="" />
          <h3>Elon Musk</h3>
        </div>

        <div className="s-right">
          <button>Follow</button>
          <button>Dismiss</button>
        </div>
      </div>

    </div>
  )
}

export default Sugg 