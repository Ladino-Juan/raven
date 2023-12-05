import './App.css'
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from "./pages/Home"
const ArtistaDaniel = lazy(() => import('./pages/DanielGallery.jsx'));
const ArtistaBastyan = lazy(() => import('./pages/BastyanGallery.jsx'));
const ArtistaJulio = lazy(() => import('./pages/JulioGallery.jsx'));
const ArtistaJorge = lazy(() => import('./pages/JorgeGallery.jsx'));
const ArtistaValen = lazy(() => import('./pages/ValenGallery.jsx'));
const ArtistaMauro = lazy(() => import('./pages/MauroGallery.jsx'));
const ArtistaChris = lazy(() => import('./pages/ChrisGallery.jsx'));
const JoyeriaRaven = lazy(() => import('./pages/Joyeria.jsx'));

function App() {

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/daniel_mejia"
      element={
        <Suspense fallback={<>Loading...</>}>
          <ScrollToTop />
          <ArtistaDaniel />
        </Suspense>
      }
    />
     <Route
      path="/bastyan"
      element={
        <Suspense fallback={<>Loading...</>}>
          <ScrollToTop />
          <ArtistaBastyan />
        </Suspense>
      }
    />
     <Route
      path="/jorge_yarce"
      element={
        <Suspense fallback={<>Loading...</>}>
          <ScrollToTop />
          <ArtistaJorge />
        </Suspense>
      }
    />
     <Route
      path="/julio_lenis"
      element={
        <Suspense fallback={<>Loading...</>}>
          <ScrollToTop />
          <ArtistaJulio />
        </Suspense>
      }
    />
       <Route
      path="/joyeria_raven"
      element={
        <Suspense fallback={<>Loading...</>}>
          <ScrollToTop />
          <JoyeriaRaven />
        </Suspense>
      }
    />
     <Route
      path="/valen_muver"
      element={
        <Suspense fallback={<>Loading...</>}>
          <ScrollToTop />
          <ArtistaValen/>
        </Suspense>
      }
    />
    <Route
      path="/chris_restrepo"
      element={
        <Suspense fallback={<>Loading...</>}>
          <ScrollToTop />
          <ArtistaChris/>
        </Suspense>
      }
    />
     <Route
      path="/mauro_acero"
      element={
        <Suspense fallback={<>Loading...</>}>
          <ScrollToTop />
          <ArtistaMauro/>
        </Suspense>
      }
    />
  </Routes>
  )
}

export default App
