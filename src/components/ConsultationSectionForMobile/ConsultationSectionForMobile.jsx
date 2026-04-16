import { useState } from 'react'
import EkatAlina from '../EkatAlina/EkatAlina'
import './styles.css'
import FormForMobile from '../Forms/FormForMobile'

const ConsultationSectionForMobile = () => {
	const [phone, setPhone] = useState('')

	const handleFocus = () => {
		if(!phone) {
			setPhone('+7')
		}
	}

	const handleBlur = () => {
		if(phone === '+7') {
			setPhone('')
		}
	}

	const handleChange = (e) => {
		const value = e.target.value
		if(value.startsWith('+7') || value === '') {
			setPhone(value)
		}
	}
	return (
		<section className="consultation-section__mobile">
			<img src="src/assets/images/ImageForForm.png" alt="" />
			<FormForMobile 
				handleFocus={handleFocus}
				handleBlur={handleBlur}
				handleChange={handleChange}
				phone={phone}
			/>
			<EkatAlina color=' #7c7c7c' className='cons'/>
		</section>
	)
}

export default ConsultationSectionForMobile