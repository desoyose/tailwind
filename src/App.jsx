import { Header  } from "./components/Header"
import { Main } from "./components/Main"
import { Services } from "./components/Services"
import { TestimonialContainer } from "./components/TestimonialContainer"
import { Galery } from "./components/Galery"
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main  className="max-w[1440px] mx-auto relative">
      <Header />
      <Main />
      <Services/>
      <TestimonialContainer />
      <Galery />
      <Footer />
    
    </main>
  )
}