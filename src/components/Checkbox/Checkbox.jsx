import { useState } from 'react'
import './styles.css'

const Checkbox = ({title, color}) => {
	const [checked, setChecked] = useState(false)

	return (
		<label className="checkbox-container">
			<input 
				type="checkbox" 
				checked={checked} 
				onChange={() => setChecked(!checked)} 
			/>
			<div className="svg-wrapper">
				<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="0.5" y="0.5" width="16" height="16" rx="2.5" stroke={color} />
				<path 
					className="check-mark"
					d="M13.2481 3L6.42814 10.4983L4.44814 8.995H3.34814L6.42814 14L14.3481 3H13.2481Z" 
					fill={color} 
					style={{ display: checked ? 'block' : 'none' }} 
				/>
				</svg>
			</div>
			
			<span className="label-text" style={{color: color}}>{title}</span>
		</label>
	)
}

export default Checkbox