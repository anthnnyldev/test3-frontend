import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ropagirl from '../assets/img/ropagirl.jpeg'

export default function GirlView() {
  return (
    <>
      <Navbar />

      <div className="px-12">
        <div className="text-center">
          <h2 className="text-xl text-rose-400 uppercase font-bold py-4">
            Niñas
          </h2>

          <p className="text-lg text-gray-800 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            architecto asperiores magnam, quo rem numquam sed repellat qui
            maxime voluptas soluta ipsam debitis placeat voluptatibus,
            molestias, fugit aspernatur at nemo labore? Neque, consequuntur
            corporis rerum debitis amet obcaecati maxime, totam assumenda odit
            accusamus placeat voluptatibus voluptatum in vel fugit quidem!
          </p>
        </div>

        <div className="font-medium pt-12">
          <li className="list-disc mb-2">Ropas Elegantes.</li>
          <li className="list-disc mb-2">Ropas Casuales.</li>
          <li className="list-disc mb-2">Ropas de calle.</li>
          <li className="list-disc mb-2">Ropas de playa.</li>
          <li className="list-disc mb-2">Ropas de epoca Victoriana.</li>
          <li className="list-disc mb-2">Y otros conjuntos mas..</li>
        </div>
      </div>

      <div className="px-12 py-2 text-center">
        <h2 className="uppercase text-2xl font-bold text-rose-400">
          Conjuntos de Ropas
        </h2>
      </div>

      <p className="text-red-500 font-bold uppercase px-12">
        Utilizare algunas mismas fotos porque despues se me acaba el tiempo
      </p>

      <div className="grid grid-cols-3 gap-4 px-12 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            className="w-full h-auto object-cover"
            src={ropagirl}
            alt=""
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-center text-rose-400">
              Ropa Elegante
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            className="w-full h-auto object-cover"
            src={ropagirl}
            alt=""
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-center text-rose-400">
              Ropa Casual
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            className="w-full h-auto object-cover"
            src={ropagirl}
            alt=""
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-center text-rose-400">
              Ropa de calle
            </h2>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
