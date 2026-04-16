import './styles.css'
import FeaturesBlock from "../FeaturesBlock/FeaturesBlock"

const FeaturesList = () => {
	const featuresListArr = [
		{
			id: 1,
			title: 'Консультация',
			par: 'Изучение дела, анализ ситуации, оценка рисков, прогноз результата'
		},
		{
			id: 2,
			title: 'Договор',
			par: 'Согласование условий, стоимости, подписание договора, предоплата'
		},
		{
			id: 3,
			title: 'Результат',
			par: 'Оказание услуг, получение результата, решения, расчет'
		},
	]

	return (
		<div className="features-list">
			<h3 className="features-list__title">Понятно, комфортно, надежно</h3>
			<div className="features-list__flexbox">
				{featuresListArr.map((el) => (
					<FeaturesBlock 
						key={el.id}
						id={el.id}
						title={el.title}
						par={el.par}
					/>
				))}
				<div className=".features-list__block__line"></div>
			</div>
		</div>
	)
}

export default FeaturesList