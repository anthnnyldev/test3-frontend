import Navbar from '../components/Navbar'
import ropa1 from '../assets/img/ropa1.jpg'
import hero from '../assets/img/hero.jpg'
import hero2 from '../assets/img/hero2.jpg'
import Footer from '../components/Footer'

export default function HomeView() {
  return (
    <>
      <Navbar />
      <div className="max-w-full mx-12">
        <div className="my-4">
          <h1 className="text-xl text-center font-bold">ROPAS DE BEBES</h1>
        </div>

        <div className="relative">
          <img
            src={hero}
            alt="herobanner"
            className="w-full h-96 object-cover rounded-lg"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-lime-100 text-4xl font-bold bg-opacity-50 px-4 py-2 rounded-md uppercase">
              Bienvenido a ROPABABY
            </h2>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/2">
            <h2 className='px-12 py-4 text-2xl font-semibold text-amber-600'>ROPABABY</h2>
            <p className="px-12 text-lg">
              A los 3 años, los niños están llenos de energía, curiosidad y
              ganas de explorar el mundo que los rodea. Por eso, la ropa ideal
              para esta etapa debe ofrecer no solo comodidad, sino también
              libertad de movimiento y resistencia para acompañarlos en todas
              sus aventuras. Nuestra colección de ropa para bebés de 3 años está
              diseñada pensando en la suavidad de los materiales, la facilidad
              para vestir y la moda que les encanta a ellos y a sus padres.
              Desde prendas casuales hasta conjuntos especiales para ocasiones
              importantes, nuestra selección cubre todas las necesidades y
              ofrece opciones modernas y coloridas que celebran la alegría de la
              infancia
            </p>
          </div>

          <div className='w-1/2 py-12'>
            <img src={hero2} alt="" className='w-full h-96 rounded-lg' />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-auto object-cover" src={ropa1} alt="" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-center">Ropa</h2>
              <p className="pt-2 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                blanditiis ex explicabo atque quis fugit quam tenetur sed
                sapiente quisquam.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-auto object-cover" src={ropa1} alt="" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-center">Ropa2</h2>
              <p className="pt-2 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                blanditiis ex explicabo atque quis fugit quam tenetur sed
                sapiente quisquam.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-auto object-cover" src={ropa1} alt="" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-center">Ropa3</h2>
              <p className="pt-2 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                blanditiis ex explicabo atque quis fugit quam tenetur sed
                sapiente quisquam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
