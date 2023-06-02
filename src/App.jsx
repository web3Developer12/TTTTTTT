import BuyInfo from './Components/BuyInfo'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Info from './Components/Info'
import Navbar from './Components/Navbar'
import Tokenomics from './Components/Tokenomics'


function App() {

    return (
        <main className='main-area'>
            <Navbar/>
            <Hero/>
            <Info/>
            <BuyInfo/>
            <Tokenomics/>
            <Footer/>
        </main>
    )
}

export default App
