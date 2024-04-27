import Container from 'react-bootstrap/Container';

import MyOffcanvas from '../componentes/MyOffcanvas'

const Services = () => {
  return (

    <>
      <div>services</div>
      <Container>
        <h2 className='h2'>Haz click en los botones para ver los Offcanvas</h2>
        <MyOffcanvas name="end" placement="end" />

        <MyOffcanvas name="start" placement="start" />
        
        <MyOffcanvas name="top" placement="top" />
        
        <MyOffcanvas name="bottom" placement="bottom" />
      </Container>
    </>
  )
};

export default Services
