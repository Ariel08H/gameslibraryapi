import React from 'react'
import SocialLinks from '../components/SocialLinks'
import Title from '../components/Title'

const About = () => {
  return (
    <main className='about-page'>
      <section className='about-left'>

        <Title>HELLO</Title>

        <p> Hey there! I’m a 17-year-old high school student and aspiring web developer. I built this React app because I believe gaming should be accessible to everyone, regardless of budget. That's why I created this hub to help you find the best free-to-play games out there. </p>
        
        <p> When I'm not coding, I'm usually gaming—whether it’s grinding competitive shooters on PC or exploring open worlds on console. I hope you find your next favorite game here! </p>

        <SocialLinks/>
      </section>

      <section className='about-right'>
        <img alt="Ariel Hanan" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3H4wynv5tWv-vH1xQcfMDAK1_uIbm8NRfA&s"/>
      </section>

    </main>
  )
}

export default About