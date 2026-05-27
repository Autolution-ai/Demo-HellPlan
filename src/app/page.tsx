import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Audiences } from '@/components/Audiences'
import { Services } from '@/components/Services'
import { Process } from '@/components/Process'
import { References } from '@/components/References'
import { About } from '@/components/About'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { Career } from '@/components/Career'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Audiences />
        <Services />
        <Process />
        <References />
        <About />
        <Testimonials />
        <FAQ />
        <Career />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
