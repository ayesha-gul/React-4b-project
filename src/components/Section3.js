import React from 'react'
import '../App.css';

const Solo3 = () => {
  return (
   
        <div className='sec-container'>
            <section>
                <div>
                    <div className='subhero'>
                        <img  src='https://syscoin.org/imgs/hero-3d-sys-v02.png'/>
                        <h2> <strong>Syscoin </strong> is the <strong> only layer-1 Blockchain</strong>  <br />that scales with <strong>EVM functionality </strong>. </h2>
                    </div>
                    <div className='subhero-threes'>
                        <div>
                        <img src='https://syscoin.org/imgs/ethereum-250px.png ' />
                        <h3>NEVM Smart Contracts</h3>
                        </div>
                        <div>
                        <img src=' https://syscoin.org/imgs/bitcoin-250px.png' />
                        <h3>Bitcoin Merge-Mined</h3>
                        </div>
                        <div>
                        <img src='https://syscoin.org/imgs/speed-250px.png ' />
                        <h3>Roadmap to ZK-Rollups</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
  
  )
}

export default Solo3