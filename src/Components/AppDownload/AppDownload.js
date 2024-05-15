import React from 'react'
import { assets } from '../../assets/assets'
import '../AppDownload/AppDownload.css'

const AppDownload = () => {
  return (
    <div className='app-download' id='mobile-app'>
        <p>For Better Experience Download <br /> Tomoto App</p>
        <div className='app-download-images'>
            <img src={assets.app_store} alt='app-store' />
            <img src={assets.play_store} alt='play-store' />
        </div>

    </div>
  )
}

export default AppDownload