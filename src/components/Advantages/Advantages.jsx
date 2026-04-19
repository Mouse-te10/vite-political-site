import './styles.css'
import icon1 from '../../assets/images/icon1.svg'
import icon2 from '../../assets/images/icon2.svg'
import icon3 from '../../assets/images/icon3.svg'
import icon4 from '../../assets/images/icon4.svg'
import icon5 from '../../assets/images/icon5.svg'
import icon6 from '../../assets/images/icon6.svg'

const Advantages = () => {

	const advantagesArray = [
		{
			img: icon1,
			paragraph: 'Многолетний успешный опыт работы',
		},
		{
			img: icon2,
			paragraph: 'Профессиональный подход к каждому делу',
		},
		{
			img: icon3,
			paragraph: 'Высокий процент выйгранных дел',
		},
		{
			img: icon4,
			paragraph: 'Всегда на связи с клиентами',
		},
		{
			img: icon5,
			paragraph: 'Оперативность и пунктуальность в работе',
		},
		{
			img: icon6,
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