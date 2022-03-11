import useWebAnimations from '@wellyshen/use-web-animations';
import React from 'react'
import '../App.css';

const Solo4 = () => {
    const frames = [
        { transform: "translateX(0px)"},
        {transform: "translateX(110px)"}
      ]
  
      const timming = {
          duration: 4000,
        iterations: Infinity,
        transitions: 0.5,
        direction:"alternate-reverse",
        
        easing: "ease-in",

      
      }
      const movmnt = useWebAnimations({
        keyframes : frames,
        animationOptions: timming
    })
    const smart1 = useWebAnimations({
        keyframes : frames,
        animationOptions: timming
    })
    const smart2 = useWebAnimations({
        keyframes : frames,
        animationOptions: timming
    })
    const smart3 = useWebAnimations({
        keyframes : frames,
        animationOptions: timming
    })
    const smart4 = useWebAnimations({
        keyframes : frames,
        animationOptions: timming
    })
    const smart5 = useWebAnimations({
        keyframes : frames,
        animationOptions: timming
    })
  return (
    <div className='sa'>
       
        <section id='section' className='partners center'>
            <div className='ignore'>
                <h4>Ecosystem partners</h4>
                <div className='marquee' >
                    <ul>
                        <div  className="js-marquee-wrapper" >
                            <div className='js-marquee'   style={{marginRight:'0px'}, {float:'left'}}>
                                <li id='movmnt' ref={movmnt.ref}>
                                    <img   className='partner' src='https://syscoin.org/imgs/komodo-logo.png' />
                                </li>
                                <li id='smart1' ref={smart1.ref}>
                                    <img   className='partner' src='https://syscoin.org/imgs/itsa.png' />
                                </li>
                                <li id='smart2' ref={smart2.ref}>
                                    <img  className='partner' src='https://syscoin.org/imgs/corion-logo.png' />
                                </li>
                                <li  id='smart3' ref={smart3.ref}>
                                    <img  className='partner' src='https://syscoin.org/imgs/azure-logo.png' />
                                </li>
                                <li  id='smart4' ref={smart4.ref}>
                                    <img  className='partner' src='https://syscoin.org/imgs/dif-logo.png' />
                                </li>
                                <li  id='smart5' ref={smart5.ref}>
                                    <img  className='partner' src='https://syscoin.org/imgs/elint-logo.png' />
                                </li>
                                {/* <li>
                                    <img  className='partner' src='https://syscoin.org/imgs/binance-logo.png' />
                                </li>
                                <li>
                                    <img  className='partner' src='https://syscoin.org/imgs/klever-logo.png' />
                                </li>
                                <li>
                                    <img  className='partner' src='https://syscoin.org/imgs/bcf-logo.png' />
                                </li> */}
                                {/* <li>
                                    <img  className='partner' src='https://syscoin.org/imgs/bigg-logo.png' />
                                </li>
                                <li>
                                    <img  className='partner' src='https://syscoin.org/imgs/polygon-logo.png' />
                                </li>
                                <li>
                                    <img  className='partner' src='https://syscoin.org/imgs/logo-viawallet.png' />
                                </li> */}
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default Solo4