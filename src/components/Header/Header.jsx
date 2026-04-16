import HeaderLeftContainer from '../HeaderLeftContainer/HeaderLeftContainer';
import HeaderRightContainer from '../HeaderRightContainer/HeaderRightContainer';
import './styles.css'

const Header = () => {
	return (
		<header className="header">
			<div className='header__container'>
				<HeaderLeftContainer />
				<HeaderRightContainer />
			</div>
			<hr />
		</header>
	)
}

export default Header