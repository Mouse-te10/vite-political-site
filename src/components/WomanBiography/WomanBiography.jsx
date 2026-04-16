import './styles.css'

const WomanBiography = ({
	profession,
	name,
	description,
	blockquote,
}) => {
	return (
		<div className="woman-biography">
			<h5>{profession}</h5>
			<h4>{name}</h4>
			<p>{description}</p>
			<blockquote>{blockquote}</blockquote>
		</div>
	)
}

export default WomanBiography