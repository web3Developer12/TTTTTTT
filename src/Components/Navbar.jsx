import './Navbar.css'

export default function Navbar(){
    return <div className='navbar'>

    <div className='ceil'>
      <p>soyjackcoin</p>
    </div>

    <div className='ceil'>
      <ul>
        <li>Community</li>
        <li>How to buy ?</li>
        <li>Tokenomics</li>
        <li>Airdrop</li>
      </ul>
    </div>

    <div className='ceil buttons' style={{justifyContent:'flex-end'}}>
        <button>Buy now</button>
        <button>Connect wallet </button>
    </div>
  </div>
}