import React from 'react'
import lkd from './assets/lkdn.png'
import fb from './assets/fb.png'
import insta from './assets/insta.png'
import twt from './assets/twitter.png'
import tel from './assets/telegram.png'

export default function Footer() {
  return (
    <div>
        <footer className="footer">
      <div className="container">
        <div className="social-links">
            <p className='footer-text'>Our organization operates with an unwavering commitment to uphold the principles and regulations established by the esteemed High Court of India. This commitment forms the very core of our mission and sets the foundation for all our endeavors. The legal system in India is vast and multifaceted, with numerous cases arising daily that require attention, resolution, and justice. In this complex landscape, we have taken it upon ourselves to prioritize these cases in a manner that ensures fairness, efficiency, and adherence to the law.</p>
          <a href="https://www.facebook.com/MLJ.GovIndia/" target="_blank" rel="noopener noreferrer"><img src={lkd} alt="Facebook" /></a>
          <a href="https://twitter.com/mlj_goi?lang=en" target="_blank" rel="noopener noreferrer"><img src={fb} alt="Twitter" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><img src={insta} alt="LinkedIn" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><img src={twt} alt="Instagram" /></a>
          <a href="https://t.me/s/livelawindia" target="_blank" rel="noopener noreferrer"><img src={tel} alt="Instagram" /></a>
        </div>
        <p>&copy; 2024 Justice_First. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}
