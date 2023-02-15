import React from "react";
import piza from '../image/piza.jpg'

const Card = () => {
  return (
     <div >
       <div >
          <div
        classNaame="card mt-3"
        style={{ width: "18rem", maxHeight: "360px" }}
      >
        <img src={piza} classNaame="card-img-top" alt="..." />
        <div classNaame="card-body border border-light" >
          <h5 classNaame="card-title ">Card title</h5>
          <p classNaame="card-text">Some quick example text to buildt.</p>
          <div className="container w-100">
            <select className="m-2 h-100  bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100  bg-success rounded">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>

            <div className="d-inline h-100 fs-5">Total price</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
