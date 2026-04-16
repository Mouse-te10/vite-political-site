import Header from "../Header/Header"
import MainBlock from "../MainBlock/MainBlock"
import Services from "../Services/Services"
import FixedBlock from "../FixedBlock/FixedBlock"
import FeaturesList from "../FeaturesList/FeaturesList"
import ConsultationSection from "../ConsultationSection/ConsultationSection"
import ConsultationSectionForMobile from "../ConsultationSectionForMobile/ConsultationSectionForMobile"

function Main() {
  return (
    <>
      <Header />
      <FixedBlock />
      <MainBlock />
      <Services />
	  <FeaturesList />
	  <ConsultationSection />
	  <ConsultationSectionForMobile />
    </>
  )
}

export default Main