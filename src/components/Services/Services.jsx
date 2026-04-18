import './styles.css'
import servicesArr from "../../data/servicesArr.jsx"
import ServiceBlock from "../ServiceBlock/ServiceBlock.jsx";

const Services = () => {
    return (
        <section className="services-section">
            <h2 className="services-main-text">Наши услуги</h2>
            <div className="services">
                {servicesArr.map((service, index, array) => {

                    return (
                        <ServiceBlock 
                            index={index}
                            className='service-block'
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