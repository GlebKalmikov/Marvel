import Main from '../Main/Main';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import './mainLayout.scss'; 

 
const MainLayout = ( {children} ) => { 
  return (
    <div className='layout'>
      <Header>
        <Nav/>
      </Header>
      <Main>

      </Main>
    </div>
  )
}

export default MainLayout;