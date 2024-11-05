import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return (
    <section id='information-container'>
      <div className='info-card'>
        <AiFillPhone id='phone-icon'/>
        <div>
          <h3>Telefone</h3>
          <p>(31) 98235-0737</p>
        </div>
      </div>
      <div className='info-card'>
        <AiOutlineMail id='email-icon'/>
        <div>
          <h3>E-mail</h3>
          <p>mateuslucas333@gmail.com</p>
        </div>
      </div>
      <div className='info-card'>
        <AiFillEnvironment id='pin-icon'/>
        <div>
          <h3>Localização</h3>
          <p>Ponte Nova - MG</p>
        </div>
      </div>
    </section>
  )
}

export default InformationContainer