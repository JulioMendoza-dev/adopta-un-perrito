
import Header from './components/Header'
import MyCards from './components/MyCards'
import Footer from './components/Footer'
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>

      <Header title="adopta un perrito" />

      <CardGroup style={{ gap: '20px' }}>
        <MyCards 
        comentario="Perrito encontrado en stgo centro, 2 meses" 
        title="meñique" 
        urlImg="https://images.pexels.com/photos/11605151/pexels-photo-11605151.jpeg?auto=compress&cs=tinysrgb&w=600" bgColor="success" raza="quiltrito" />
        <MyCards 
        comentario="perrita de 3 meses necesita familia..." 
        title="boby" 
        urlImg="https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=600" bgColor="primary" raza="terrier" />
        <MyCards 
        comentario="de raza quiltra pero regalon, alias killer" 
        title="pocho" 
        urlImg="https://images.pexels.com/photos/1619690/pexels-photo-1619690.jpeg?auto=compress&cs=tinysrgb&w=600" bgColor="danger" raza="galgo" />
        <MyCards 
        comentario="necesita cuidado por posibles lesiones y espera una familia responzable" 
        title="cazan" 
        urlImg="https://images.pexels.com/photos/14739822/pexels-photo-14739822.jpeg?auto=compress&cs=tinysrgb&w=600" bgColor="warning" raza="doverman" />
      </CardGroup>

      <Footer parraf="Este es el ranking de los perritos que necesitan ser adoptados en breve" />

    </>
  )
}