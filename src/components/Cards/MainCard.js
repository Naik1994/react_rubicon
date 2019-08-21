import React from 'react';
import './Cards.css';

const MainCard = ({message, closeMenu}) => {
  return(
      <article onClick={closeMenu} className="br2 shadow-2 bw2 my-bg">
      <h6 className="pv1 ml3">{message}</h6>
      <hr/>
      <div className = "circle">
        <span className="count pv1">0</span>
      </div>
        <div className="pa2 ph3-ns pb3-ns">
          <section className = "border">
            <div>
              <span className="count1">0</span>
              <p>Acceptance SLA about to breach</p>
            </div>
            <div>
              <span className="count1">0</span>
              <p>Invoiced SLA about to breach</p>
            </div>
          </section>
        </div>
      </article>
  );
}

export default MainCard;
