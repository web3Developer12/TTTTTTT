
const Hero = () => {
    return (

        <div className='hero'>

            <div className='card'>

                <div className='card-header'>

                    <div className='card-header-sale'>
                        <ul>
                            <li>03d</li>
                            <li>12h</li>
                            <li>08m</li>
                            <li>18s</li>
                        </ul>
                    </div>

                    <p className='card-header-msg'>APE IN BEFORE PRICE INCREASES!</p>

                    <div className='scroll-bar'>
                        <div className='stage'>Next Stage Price: $0.0256</div>
                        <div className='stage-loader'></div>
                    </div>

                    <p className="payment-type">USDT Raised: $778,175.75 / $1,006,000</p>

                </div>

                <div className="card-footer">
                    <p className='price'>1 $SOYJ = $0.0253</p>

                    <div className='buttons-token'>

                        <button>Matic</button>
                        <button>Ustd</button>

                    </div>

                    <input className='buy-value' placeholder="0.0000000" />

                    <div className='buttons-bottom'>
                        <button className="connect-wallet-btn">Connect wallet</button>
                        <button className="how-to-buy-btn">How to buy ?</button>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Hero