import './styles.css'

const Clients = () => {
	const clientsArr = [
		'src/assets/images/sliderImages/Image1.png',
		'src/assets/images/sliderImages/Image2.png',
		'src/assets/images/sliderImages/Image3.png',
		'src/assets/images/sliderImages/Image4.png',
		'src/assets/images/sliderImages/Image5.png',
		'src/assets/images/sliderImages/Image6.png',
		'src/assets/images/sliderImages/Image7.png',
		'src/assets/images/sliderImages/Image1.png',
		'src/assets/images/sliderImages/Image2.png',
		'src/assets/images/sliderImages/Image3.png',
		'src/assets/images/sliderImages/Image4.png',
		'src/assets/images/sliderImages/Image5.png',
		'src/assets/images/sliderImages/Image6.png',
		'src/assets/images/sliderImages/Image7.png',
	]

	const clientsArrForMobile = [
		'src/assets/images/sliderImages/Image4.png',
		'src/assets/images/sliderImages/Image5.png',
		'src/assets/images/sliderImages/Image6.png',
		'src/assets/images/sliderImages/Image7.png',
		'src/assets/images/sliderImages/Image1.png',
		'src/assets/images/sliderImages/Image2.png',
		'src/assets/images/sliderImages/Image3.png',
		'src/assets/images/sliderImages/Image4.png',
		'src/assets/images/sliderImages/Image5.png',
		'src/assets/images/sliderImages/Image6.png',
		'src/assets/images/sliderImages/Image7.png',
		'src/assets/images/sliderImages/Image1.png',
		'src/assets/images/sliderImages/Image2.png',
		'src/assets/images/sliderImages/Image3.png',
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