import Hero from '../components/Hero'
import About from '../components/About'
import Menu from '../components/Menu'
import Team from '../components/Team'
import Testemonials from '../components/Testemonials'
import Reservations from '../components/Reservations'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Team />
      <Testemonials />
      <Reservations />
      <Footer />
    </main>
  )
}

// Enable static rendering for better performance
export const dynamic = 'force-static'