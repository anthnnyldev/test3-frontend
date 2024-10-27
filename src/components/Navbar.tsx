import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className=''>
        <div className="flex justify-between px-12 py-4 items-center">
          <a href="" className="text-xl text-amber-600 font-bold items-center uppercase">
            RopaBaby
          </a>

          <div className="flex space-x-4 font-bold uppercase">
            <Link className="px-4 text-amber-600 hover:text-amber-400" to={'/home'}>
              Inicio
            </Link>
            <Link className="px-4 text-amber-600 hover:text-amber-400" to={'/galery'}>
              Galeria
            </Link>
            <Link className="px-4 text-amber-600 hover:text-amber-400" to={'/boys'}>
              Niños
            </Link>
            <Link className="px-4 text-amber-600 hover:text-amber-400" to={'/girls'}>
              Niñas
            </Link>
            <Link className="px-4 text-amber-600 hover:text-amber-400" to={'/contact'}>
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
