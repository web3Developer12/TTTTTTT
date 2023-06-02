import '../styles/tokenomics.css'

export default function Tokenomics() {

    return <div className="tokenomics">
        <p className="header">TOKENOMICS</p>
        <p className='sub'>100% of the $WSM token supply is for the Wall Street Memes community, with 50% available in presale.</p>
        <ul className='data'>
            <li>50% Presale</li>
            <li>30% Community Rewards</li>
            <li>10% CEX Liquidity</li>
            <li>10% DEX Liquidity</li>
        </ul>
    </div>
}