import React from 'react'
import { CiInstagram, CiYoutube} from "react-icons/ci";
import { FaDiscord, FaTiktok, FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => {

    const sendWhatsapp = () => {
        const number='072507985855';
        const formattedPhoneNumber = number.replace(/\D/g, '');
        
        const message = 'thank you for the site! you are not a scammer'

        const URL = `https://wa.me/${formattedPhoneNumber}?text=${message}`
        window.open(URL, '_blank')
    }

  return (
    <div className='social'>
    
    <a href='' target='_blank'>
        <CiInstagram />
    </a>

    <a href='' target='_blank'>
        <FaDiscord />
    </a>

    <a href='' target='_blank'>
        <FaTiktok />
    </a>

    <a href='' target='_blank'>
        <CiYoutube />
    </a>

    <button onClick={sendWhatsapp} className='whatsapp-btn'>
        <FaWhatsapp />
    </button>
    
    
    </div>
  )
}

export default SocialLinks