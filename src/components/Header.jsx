import HeaderLeftContainer from './HeaderLeftContainer';
import HeaderRightContainer from './HeaderRightContainer';

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