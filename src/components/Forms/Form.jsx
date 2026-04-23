import './styles.css'
import Checkbox from "../Checkbox/Checkbox"
import { useState } from 'react'
import { handleFocus, handleBlur, handleChange} from '../../data/Functions.js'

const Form = () => {
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
		<form action="" className='consultation-form'>
			<label htmlFor="name">Ваше имя</label>
			<input 
				type="text" 
				id='name' 
				className={`form__name ${errors.name ? 'input-error' : ''}`}
				onChange={(e) => {
                    setName(e.target.value)
                    if (errors.name) setErrors(prev => ({ ...prev, name: false }))
                }}
				value={name}
			/>
			<label htmlFor="telephone-number">Номер телефона</label>
			<input 
				type="tel" 
				id='telephone-number' 
				value={phone}
				onFocus={() => handleFocus(phone, setPhone)}
				onBlur={() => handleBlur(phone, setPhone)}
				onChange={(event) => handleChange(event, setPhone)}
				className={`form__telephone-number ${errors.phone ? 'input-error' : ''}`}
				placeholder="+7 (999) 000-00-00" required
			/>
			<label htmlFor="comment">Коментарий</label>
			<textarea id="comment" className='form__comment'></textarea>
			<button className='button-consultation' onClick={onClick}>Получить консультацию</button>
			<Checkbox title='Согласен на обработку персональных данных *' color={'#929292'}/>
		</form>
	)
}

export default Form