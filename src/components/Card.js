import React from "react";
import { BsArrowDown } from "react-icons/bs";

export default function Card() {
  return (
    <div className="card-info">
      <div className="card-container">
        <div className="card">
          <div className="number">
            <p className="num">
              1<span className="plus">+</span>
            </p>
            <div className="down-line">
              <div className="line"></div>
              <div className="card-text">
                years of <p>experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="number">
            <p className="num">
              37<span className="plus">+</span>
            </p>
            <div className="down-line">
              <div className="line"></div>
              <div className="card-text">
                projects <p>completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="number">
            <p className="num">
              10<span className="plus">+</span>
            </p>
            <div className="down-line">
              <div className="line"></div>
              <div className="card-text">
                happy<p>customers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="number">
            <p className="num">
              8<span className="plus">+</span>
            </p>
            <div className="down-line">
              <div className="line"></div>
              <div className="card-text">
                skills <p>practiced</p>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll">
          <BsArrowDown />
        </div>
      </div>
    </div>
  );
}
