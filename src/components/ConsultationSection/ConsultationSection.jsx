import { useState } from 'react'
import EkatAlina from '../EkatAlina/EkatAlina'
import './styles.css'
import Form from '../Forms/Form'
import ImageForForm from '../../assets/images/ImageForForm.png'

const ConsultationSection = () => {
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
		<section className="consultation-section">
			<img src={ImageForForm} alt="" />
			<div>
				<h3>Предварительная консультация по Вашим юридическим вопросам</h3>
				<EkatAlina color=' #7c7c7c' className='cons'/>
			</div>
			<Form 
				handleFocus={handleFocus}
				handleBlur={handleBlur}
				handleChange={handleChange}
				phone={phone}
			/>
		</section>
	)
}

export default ConsultationSection