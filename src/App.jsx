import Tools from './components/Tools'
import Navbar from './components/Navbar'
import './App.css'
import HeroSection from './components/Herosection'
import PartnerSection from './components/PartnerSection';
import Services from './components/Services';
import Community from './components/Community';
import Provider from './components/Provider';
import BenefitsSection from './components/BenefitsSection';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials'
import Latestarticles from './components/Latestarticles';
import FAQues from './components/FAQues';
import Apply from './components/Apply';
import Footer from './components/Footer';

function App() {

  return (
    <>
      {/* <Tools/> */}
      <Navbar/>
      <HeroSection/>
      <PartnerSection/>
      <Services/>
      <Community/>
      <Provider/>
      <BenefitsSection/>
      <Courses/>
      <Testimonials/>
      <Latestarticles/>
      <FAQues/>
      <Apply/>
      <Footer/>
    </>
  )
}

export default App
