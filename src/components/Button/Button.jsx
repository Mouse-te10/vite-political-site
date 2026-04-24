import './styles.css'

const Button = ({children, href}) => {
	return (
		<a href={href} className='header__button'>
			{children}
		</a>
	)
}

export default Button