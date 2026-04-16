import './styles.css'

const Advantages = () => {

	const advantagesArray = [
		{
			img: 'src/assets/images/icon1.svg',
			paragraph: 'Многолетний успешный опыт работы',
		},
		{
			img: 'src/assets/images/icon2.svg',
			paragraph: 'Профессиональный подход к каждому делу',
		},
		{
			img: 'src/assets/images/icon3.svg',
			paragraph: 'Высокий процент выйгранных дел',
		},
		{
			img: 'src/assets/images/icon4.svg',
			paragraph: 'Всегда на связи с клиентами',
		},
		{
			img: 'src/assets/images/icon5.svg',
			paragraph: 'Оперативность и пунктуальность в работе',
		},
		{
			img: 'src/assets/images/icon6.svg',
			paragraph: 'Информирование о ходе дел на всех этапах',
		},
	]

	return (
		<section className="advantages-section">
				{advantagesArray.map((el, id) => (
				<div className="advantages__block" key={id}>
					<div className="advantages__icon">
						<img src={el.img} alt="" />
					</div>
					<p className="advantages__paragraph">{el.paragraph}</p>
				</div>
				))}
		</section>
	)
}

export default Advantages