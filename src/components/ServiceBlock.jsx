import ListElement from "./ListElement"

const ServiceBlock = (props) => {
    const {
        className,
        service,
    } = props

    return (
        <div className={className}>
            <p className="service-block__paragraph">{service.paragraph}</p>
            {service.svg}
            <ul className="service-block__list">
                {service.list.map((string, index) => (
                    <ListElement
                        key={index}
                        string={string}
                    />
                ))}
            </ul>
            <div className="service-block__bottom-block">
                <button className="service-block__button">Консультация</button>
                <a href="/" className="service-block__link">Подробнее</a>
            </div>
        </div>
    )
}

export default ServiceBlock