import { Link } from 'react-router-dom'
import img300 from '../assets/img/300.png'

export default function IndexView() {
  return (
    <>
      <div className="bg-green-700">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <img src={img300} alt="index" />
            <Link to={'/home'} className="font-bold uppercase text-white">
              Ropa de Bebe
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
