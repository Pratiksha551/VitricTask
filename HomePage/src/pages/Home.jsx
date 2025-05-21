import React from 'react'
import Hero from '../component/Hero'
import Services from '../component/Services'
import CaseStudies from '../component/CaseStudies'
import WorkingProcess from '../component/WorkingProcess'
import Team from '../component/Team'
import Testimonials from '../component/Testimonials'
import ContactForm from '../component/ContactForm'
import Footer from '../component/footer'
import CallToAction from '../component/Cta'

const Home = () => {
  return (
    <>
    <Hero />
    <Services />
   <CallToAction />
    <CaseStudies />
    <WorkingProcess />
    <Team />
    <Testimonials />
    <ContactForm />
    <Footer />
    </>
  )
}

export default Home
