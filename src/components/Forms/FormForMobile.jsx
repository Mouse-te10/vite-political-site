import './styles.css'
import { useState } from 'react'
import Checkbox from "../Checkbox/Checkbox"
import { handleFocus, handleBlur, handleChange} from '../../data/Functions.js'

const FormForMobile = () => {
	const [phone, setPhone] = useState('')
	const [name, setName] = useState('')
	const [errors, setErrors] = useState({ name: false, phone: false })

	const onClick = (e) => {
		e.preventDefault() // Чтобы форма не перезагрузила страницу
		
		const nameError = name.trim() === ''
		const phoneError = phone.trim() === ''

		setErrors({ name: nameError, phone: phoneError })

		if (nameError || phoneError) {
			console.log('Поля не должны быть пустыми')
			return
		}
		
		return setTimeout(() => {
			return alert('Ваша заявка отправлена!')
		}, 1000)
	}

	return (
		<form action="" className='consultation-form__mobile'>
			<h3>Предварительная консультация по Вашим юридическим вопросам</h3>
			<label htmlFor="name__mobile">Ваше имя</label>
			<input 
				type="text" 
				id='name__mobile' 
				className={`form__name__mobile ${errors.name ? 'input-error' : ''}`}
				onChange={(e) => {
                    setName(e.target.value)
                    if (errors.name) setErrors(prev => ({ ...prev, name: false }))
                }}
				value={name}
			/>
			<label htmlFor="telephone-number__mobile">Номер телефона</label>
			<input 
				type="tel" 
				id='telephone-number__mobile' 
				value={phone}
				onFocus={() => handleFocus(phone, setPhone)}
				onBlur={() => handleBlur(phone, setPhone)}
				onChange={(event) => handleChange(event, setPhone)}
				className={`form__telephone-number__mobile ${errors.phone ? 'input-error' : ''}`}
				placeholder="+7 (999) 000-00-00" required
			/>
			<label htmlFor="comment__mobile">Коментарий</label>
			<textarea id="comment__mobile" className='form__comment__mobile'></textarea>
			<button className='button-consultation__mobile' onClick={onClick}>Получить консультацию</button>
			<Checkbox title='Согласен на обработку персональных данных *' color={'#fff'}/>
		</form>
	)
}

export default FormForMobile