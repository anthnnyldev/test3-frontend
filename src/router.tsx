import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexView from './view/IndexView'
import HomeView from './view/HomeView'
import GaleriaView from './view/GaleriaView'
import BoyView from './view/BoyView'
import GirlView from './view/GirlView'
import ContactView from './view/ContactView'

export default function router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<IndexView />} />
            <Route path='home' element={<HomeView />} />
            <Route path='galery' element={<GaleriaView />} />
            <Route path='boys' element={<BoyView />} />
            <Route path='girls' element={<GirlView />} />
            <Route path='contact' element={<ContactView />} />
        </Routes>
    </BrowserRouter>
  )
}
