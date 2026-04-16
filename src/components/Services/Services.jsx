import './styles.css'
import servicesArr from "../../data/servicesArr.jsx"
import ServiceBlock from "../ServiceBlock/ServiceBlock.jsx";

const Services = () => {
    return (
        <section className="services-section">
            <h2 className="services-main-text">Наши услуги</h2>
            <div className="services">
                {servicesArr.map((service, index, array) => {
                    const isLastThree = index >= array.length - 3;

                    return (
                        <ServiceBlock 
                            index={index}
                            className={isLastThree ? 'service-block__last' : 'service-block'}
                            service={service}
                            key={index}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Services