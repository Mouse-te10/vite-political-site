import './styles.css'
import Checkbox from "../Checkbox/Checkbox"
import { useState } from 'react'
import { handleFocus, handleBlur, handleChange} from '../../data/Functions.js'

const Form = () => {
	const [phone, setPhone] = useState('')
	return (
		<form action="" className='consultation-form'>
			<label htmlFor="name">Ваше имя</label>
			<input type="text" id='name' className='form__name'/>
			<label htmlFor="telephone-number">Номер телефона</label>
			<input 
				type="tel" 
				id='telephone-number' 
				value={phone}
				onFocus={() => handleFocus(phone, setPhone)}
				onBlur={() => handleBlur(phone, setPhone)}
				onChange={(event) => handleChange(event, setPhone)}
				className='form__telephone-number'
				placeholder="+7 (999) 000-00-00" required
			/>
			<label htmlFor="comment">Коментарий</label>
			<textarea id="comment" className='form__comment'></textarea>
			<button className='button-consultation'>Получить консультацию</button>
			<Checkbox title='Согласен на обработку персональных данных *' color={'#929292'}/>
		</form>
	)
}

export default Form