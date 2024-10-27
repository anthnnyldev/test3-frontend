import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function ContactView() {
  return (
    <>
      <Navbar />

      <div className='text-center font-bold pt-8 text-xl uppercase	'>
        <h2>Contacto</h2>
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <form action="" className="p-6 rounded-lg shadow-md w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="" className="text-lg font-semibold">Nombre</label>
            <input className='w-full px-4 py-2 mt-2' type="text" placeholder="Ingresa tu nombre" />
          </div>

          <div className="mb-4">
            <label htmlFor="" className="text-lg font-semibold">Apellido</label>
            <input className='w-full px-4 py-2 mt-2' type="text" placeholder="Ingresa tu apellido" />
          </div>

          <div className="mb-4">
            <label htmlFor="" className="text-lg font-semibold">Telefono</label>
            <input className='w-full px-4 py-2 mt-2' type="number" placeholder="Ingresa tu telefono" />
          </div>

          <div className="mb-4">
            <label htmlFor="" className="text-lg font-semibold">
              Email
            </label>
            <input
              type="email"
              className='w-full px-4 py-2 mt-2'
              placeholder="correo@correo.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="" className="text-lg font-semibold">Mensaje</label>
            <textarea rows={4} className='w-full px-4 py-2 mt-2' placeholder='Ingresa los que quieras enviar' />
          </div>

          <button type="button" className='bg-green-500 rounded-md border py-2 px-4 text-white font-bold'>Enviar</button>
        </form>
      </div>

      <Footer />
    </>
  )
}
