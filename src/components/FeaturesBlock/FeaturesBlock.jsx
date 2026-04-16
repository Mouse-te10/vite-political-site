import './styles.css'

const FeaturesBlock = (props) => {
	const {
		id,
		title,
		par,
 	} = props

	return (
		<div className="features-list__block">
			<div>{id}</div>
			<h4>{title}</h4>
			<p>{par}</p>
		</div>
	)
}

export default FeaturesBlock