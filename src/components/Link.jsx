import { Link as RouterLink } from 'react-router-dom';

const Link = ({ className, children, to, }) => {
	if(to === undefined) {
		to = "/"
	}
	return (
		<RouterLink to={to} className={className}>
			{children}
		</RouterLink>
	)
}

export default Link