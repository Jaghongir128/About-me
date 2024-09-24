import React from 'react'
import './footer.css'
import { face } from '../../src/assets/image'
import { whats } from '../../src/assets/image'
import { mail } from '../../src/assets/image'
import { teleg } from '../../src/assets/image'
import { insta } from '../../src/assets/image'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container footer__container">
            <h2 className="footer__title">Связаться со мной</h2>
            <div className="footer__connect">
                <a href="" className="footer__img"><img src={face} alt="" /></a>
                <a href="" className="footer__img"><img src={insta} alt="" /></a>
                <a href="" className="footer__img"><img src={teleg} alt="" /></a>
                <a href="" className="footer__img"><img src={mail} alt="" /></a>
                <a href="" className="footer__img"><img src={whats} alt="" /></a>
                </div>
        </div>
    </footer>
  )
}

export default Footer