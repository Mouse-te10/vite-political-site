import './styles.css'
import Image1 from '../../assets/images/sliderImages/Image1.png'
import Image2 from '../../assets/images/sliderImages/Image2.png'
import Image3 from '../../assets/images/sliderImages/Image3.png'
import Image4 from '../../assets/images/sliderImages/Image4.png'
import Image5 from '../../assets/images/sliderImages/Image5.png'
import Image6 from '../../assets/images/sliderImages/Image6.png'
import Image7 from '../../assets/images/sliderImages/Image7.png'

const Clients = () => {
	const clientsArr = [
		Image1,
		Image2,
		Image3,
		Image4,
		Image5,
		Image6,
		Image7,
		Image1,
		Image2,
		Image3,
		Image4,
		Image5,
		Image6,
		Image7,
	]

	const clientsArrForMobile = [
		Image5,
		Image6,
		Image7,
		Image1,
		Image2,
		Image3,
		Image4,
		Image1,
		Image2,
		Image3,
		Image4,
		Image5,
		Image6,
		Image7,
	]

	return (
		<section className="clients-section">
			<p className='last-paragraph'>Нам доверяют</p>
			<hr />
			<div className='clients-slider'>
				{[...clientsArr, ...clientsArr].map((item, id)=> (
					<img src={item} alt="" key={id}/>
				))}
			</div>
			<div className='clients-slider__mobile'>
				{[...clientsArrForMobile, ...clientsArrForMobile].map((item, id)=> (
					<img src={item} alt="" key={id}/>
				))}
			</div>
			<hr />
		</section>
	)
}

export default Clients