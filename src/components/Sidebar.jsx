import SocialNetworks from './SocialNetworks'

import Avatar from '../img/eu.png'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img width={250} src={Avatar} alt="Mateus Lucas" />
      <p className="title">Desenvolvedor Web</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="curriculo-mateus-dev.pdf" className="btn" download>Download Currículo</a>
    </aside>
  )
}

export default Sidebar