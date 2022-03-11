import React from 'react';
import "../App.css";

const Solo6 = () => {
  return (
    <div>  
         <section id='set-screen' className='blue-bg tom smallmargin'>
    <div className='section-text bigger'>
       <h1>Launch</h1>
       <p id='p'>Go live on a fast, reliable, and hassle-free network <br /> that scales with your application.</p>
       <div className='two-grid' id='fonts-set'>

           <div>
           <h3>NEVM Layer 1</h3>
           <p >Kickstart projects on Syscoin's <br /> Layer 1 NEVM solution and <br /> rest easy knowing you are <br /> backed by Bitcoin's Proof-of- <br />Work security and all this<br /> energy is recycled thanks to <br />merge-mining.</p>
           </div>

           <div id='tool'>
           <h3>Familiar Toolset</h3>
           <p>Use all of your favorite EVM  tools to build dApps that  require the most industry  proven security.</p>
           </div>

    </div>
    <button href='#' className=''  >LAUNCH</button>
    </div>
    <div className='section-image'>
        <img id='pic' src='https://syscoin.org/imgs/avatar-01-p-800.png' />
    </div>
</section> 
</div>
  )
}

export default Solo6