export const handleFocus = (phone, setPhone) => {
	if(!phone) {
		setPhone('+7')
	}
}

export const handleBlur = (phone, setPhone) => {
	if(phone === '+7') {
		setPhone('')
	}
}

export const handleChange = (e, setPhone) => {
	const value = e.target.value
	if(value.startsWith('+7') || value === '') {
		setPhone(value)
	}
}