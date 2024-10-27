import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ropagirl from '../assets/img/ropagirl.jpeg'
import ropaelegante from '../assets/img/ropaelegante.jpg'
import hero from '../assets/img/hero.jpg'

export default function GaleriaView() {
  return (
    <>
      <Navbar />

      <div className="px-12">
        <div className="text-center py-12 uppercase text-xl font-bold">
          <h2>Galeria de Ropas</h2>
        </div>

        <div className="relative pb-12">
          <img
            src={hero}
            alt="hero banner"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="rounded-lg overflow-hidden">
            <img
              className="w-full h-[80%] object-cover"
              src={ropagirl}
              alt="ropa de niña"
            />
          </div>

          <div className="rounded-lg overflow-hidden">
            <img
              className="w-full h-[80%] object-cover"
              src={ropaelegante}
              alt="ropa de niño"
            />
          </div>

          <div className="rounded-lg overflow-hidden">
            <img
              className="w-full h-[80%] object-cover"
              src={ropaelegante}
              alt="ropa de niño"
            />
          </div>

          <div className="rounded-lg overflow-hidden">
            <img
              className="w-full h-[80%] object-cover"
              src={ropagirl}
              alt="ropa de niña"
            />
          </div>

          <div className="rounded-lg overflow-hidden">
            <img
              className="w-full h-[80%] object-cover"
              src={ropagirl}
              alt="ropa de niña"
            />
          </div>

          <div className="rounded-lg overflow-hidden">
            <img
              className="w-full h-[80%] object-cover"
              src={ropaelegante}
              alt="ropa de niña"
            />
          </div>

          <div className="rounded-lg overflow-hidden">
            <img
              className="w-full h-[80%] object-cover"
              src={ropagirl}
              alt="ropa de niña"
            />
          </div>

          <div className="rounded-lg overflow-hidden">
            <img
              className="w-full h-[80%] object-cover"
              src={ropaelegante}
              alt="ropa de niña"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
