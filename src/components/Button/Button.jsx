import './styles.css'

const Button = ({children}) => {
	return (
		<button className='header__button'>
			{children}
		</button>
	)
}

export default Button