import '../styles/Info.css'
import meme from '../assets/meme.svg'

export default function Info(){
    return <div className='Info'>

        <div className='ceil'>
            <p className='header'>$SOYJ Token</p>
            <p className='sub'>
            The little guy challenged Wall Street in the infamous GameStop fiasco of 2021, and the legacy of those brave Wall Street Bets heroes endures until today.<br/><br/>

Born out of that movement is Wall Street Memes - the ultimate expression of the internet’s triumph over rampant capitalism. “Greed is good,” said Gordon Gekko in the ‘80s as he got rich off useless stocks.<br/><br/>Around 30 years later, hundreds of arguably even more useless meme coins allow ordinary people to do the same.

Wall Street Memes is tokenising the movement. Join the $WSM army today and prove that greed is, indeed, very good.
            </p>
        </div>

        <div className='ceil-meme'>
            <div className='wrapper'>
                <img src={meme} width={422}/>
            </div>
        </div>

    </div>
}