import './Background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

const Background  = ({playStatus,heroCount}) => {
    if (playStatus) {
        return (
            <video className='background fade-in' autoPlay loop muted>
                <source src={video1} type='video/mp4' />
            </video>

        )
    }
    else if(heroCount===0) {
        return (
            <img className='background fader' src={image1} alt='' />
        )
    }
    else if(heroCount===1) {
        return (
            <img className='background fader' src={image2} alt='' />
        )
    }
    else if(heroCount===2) {
        return (
            <img className='background fader' src={image3} alt='' />
        )
    }
}

export default Background;