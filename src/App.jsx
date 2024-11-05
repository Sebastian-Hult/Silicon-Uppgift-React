import './assets/css/Inuppg.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import HowDoesItWork from './components/HowDoesItWork'
import MoneyTransfer from './components/MoneyTransfer'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Subscribe from './components/Subscribe'

function App() {

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <Logos />
        <Features />
        <HowDoesItWork />
        <MoneyTransfer />
        <Reviews />
        <FAQ />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}

export default App
