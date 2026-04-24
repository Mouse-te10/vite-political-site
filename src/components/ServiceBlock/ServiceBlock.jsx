import './styles.css'
import { useState } from "react"
import ListElement from "../ListElement/ListElement"

const ServiceBlock = (props) => {
    const {
        className,
        service,
    } = props

	const [line, setLine] = useState(true)

	const onClickLine = () => {
		setLine(prev => !prev)
	}

	const secondClassName = line ? className : 'def-div'

    return (
        <div className={secondClassName} >
			<p className="service-block__paragraph">{service.paragraph}</p>
			{service.svg}
			<svg className="service-spread" width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClickLine}>
				<circle cx="34" cy="34" r="33" stroke="#DFB46B" strokeWidth="2" />
				<rect 
					x="20" y="33.5" 
					width="28" height="1" 
					rx="1" 
					fill="#424242" 
					transform="rotate(-90 34 34)"
					className={line ? '' : 'line-off'}
				/>
				<rect 
					x="20" y="33.5" 
					width="28" height="1" 
					rx="1" 
					fill="#424242" 
					transform="rotate(-180 34 34)" 
				/>
			</svg>
            <ul className="service-block__list">
                {service.list.map((string, index) => (
                    <ListElement
                        key={index}
                        string={string}
                    />
                ))}
            </ul>
            <div className="service-block__bottom-block">
                <a className="service-block__button" href="#consultation-section">Консультация</a>
                <a href="#consultation-section" className="service-block__link">Подробнее</a>
            </div>
        </div>
    )
}

export default ServiceBlock