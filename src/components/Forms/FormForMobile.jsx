import './styles.css'
import { useState } from 'react'
import Checkbox from "../Checkbox/Checkbox"
import { handleFocus, handleBlur, handleChange} from '../../data/Functions.js'

const FormForMobile = () => {
	const [phone, setPhone] = useState('')

	return (
		<form action="" className='consultation-form__mobile'>
			<h3>Предварительная консультация по Вашим юридическим вопросам</h3>
			<label htmlFor="name__mobile">Ваше имя</label>
			<input type="text" id='name__mobile' className='form__name__mobile'/>
			<label htmlFor="telephone-number__mobile">Номер телефона</label>
			<input 
				type="tel" 
				id='telephone-number__mobile' 
				value={phone}
				onFocus={() => handleFocus(phone, setPhone)}
				onBlur={() => handleBlur(phone, setPhone)}
				onChange={(event) => handleChange(event, setPhone)}
				className='form__telephone-number__mobile'
				placeholder="+7 (999) 000-00-00" required
			/>
			<label htmlFor="comment__mobile">Коментарий</label>
			<textarea id="comment__mobile" className='form__comment__mobile'></textarea>
			<button className='button-consultation__mobile'>Получить консультацию</button>
			<Checkbox title='Согласен на обработку персональных данных *' color={'#fff'}/>
		</form>
	)
}

export default FormForMobile