import React from 'react';
import "../App.css";

const Solo5 = () => {
  return (
    <div>   <section id='set-screen' className='text-right violet-bg home'>
    <div className='section-image'>
        <img src='https://syscoin.org/imgs/build-01-p-800.png' />
    </div>
    <div className='section-text bigger'>
      <div className='align'>
        <h1>Build</h1>
        <p>Build with all of the same EVM tools and <br /> resources you already know from the Ethereum  platform.</p>
        </div>
        <div className='two-grid'>
            <div>
              <h3>NEVM Smart Contracts</h3>
              <p>Deploy scalable Smart Contracts with speed and proven security.</p>
            </div>
            <div>
              <h3>Bitcoin-Clad Security</h3>
              <p>Bitcoin merge-mining <br /> leverages the most proven security in the industry.</p>
            </div>
        </div>
        <a href='#' id='clr'  className='btn-blue big '>BUILD</a>
    </div>
</section> 
</div>
  )
}

export default Solo5