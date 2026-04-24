import Header from "../Header/Header"
import MainBlock from "../MainBlock/MainBlock"
import Services from "../Services/Services"
import FixedBlock from "../FixedBlock/FixedBlock"
import FeaturesList from "../FeaturesList/FeaturesList"
import ConsultationSection from "../ConsultationSection/ConsultationSection"
import ConsultationSectionForMobile from "../ConsultationSectionForMobile/ConsultationSectionForMobile"
import Advantages from "../Advantages/Advantages"
import ContactUs from "../ContactUs/ContactUs"
import Clients from "../Clients/Clients"
import Footer from "../Footer/Footer"
import FooterMobile from "../Footer/FooterMobile"

function Main() {
  return (
    <>
      <Header />
      <FixedBlock />
      <MainBlock />
      <Services />
	  <FeaturesList />
	  <div id="consultation-section">
		<ConsultationSection />
		<ConsultationSectionForMobile />
	  </div>
	  <Advantages />
	  <ContactUs />
	  <Clients />
	  <Footer />
	  <FooterMobile />
    </>
  )
}

export default Main