import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Nav from '../components/Navigation/Navigation';
import './mainLayout.scss';

const MainLayout = ({ children }) => {
  return (
    <div className='layout'>
      <Header>
        <Nav />
      </Header>
      <Main>
        {children}
      </Main>
    </div>
  )
}

export default MainLayout;