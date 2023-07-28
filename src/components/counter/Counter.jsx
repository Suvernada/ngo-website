import React, { useState } from "react";
import "./counter.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [counterOn,setCounterOn]=useState(false);
  return (
    <section className="counter-section">
      <div className="container">
        <ul className="row counters">
          <li class="col-md-3 col-sm-6">
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <div class="counter-content">
            <i class="fa fa-usd" aria-hidden="true"></i>
              <h3 class="counter">{counterOn && <CountUp start={0} end={85389} duration={4} delay={0}/>}+</h3>
              <h4 class="text-white">Money Donated</h4>
            </div>
            </ScrollTrigger>
          </li>
          <li class="col-md-3 col-sm-6">
<ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
<div class="counter-content">
<i class="fa fa-smile-o" aria-hidden="true"></i>
<h3 class="counter">{counterOn && <CountUp start={0} end={10693} duration={4} delay={0}/>}+</h3>
<h4 class="text-white">Volunteer Around India</h4>
</div>
</ScrollTrigger>
</li>
<li class="col-md-3 col-sm-6">
<ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
<div class="counter-content">
<i class="fa fa-user" aria-hidden="true"></i>
<h3 class="counter">{counterOn && <CountUp start={0} end={5063} duration={3} delay={0}/>}+</h3>
<h4 class="text-white">People Impacted</h4>
</div>
</ScrollTrigger>
</li>
<li class="col-md-3 col-sm-6">
<ScrollTrigger>
<div class="counter-content">
<i class="fa fa-comments-o" aria-hidden="true"></i>
<h3 class="counter">{counterOn && <CountUp start={0} end={699} duration={3} delay={0}/>}+</h3>
<h4 class="text-white">Positive Feedbacks</h4>
</div>
</ScrollTrigger>
</li>
        </ul>
      </div>
    </section>
  );
};

export default Counter;
