import img from '../../images/Location.png'; 
import './header.scss'; 
import SearchForm from '../SearchForm/SearchForm';

const Header = () => {
  return (
    <>
    <div className='header-size'>  
      <div className="info-box">

        <div className="location">
      <img src={img} alt='location' className='img_loc'/>
      
         <p className='city'>New York</p>
         <SearchForm />
      </div>

       <h3 className='cloudy__text'>Cloudy</h3>
      <div className="cloudy">
     <h2 className='temperature'>26°C</h2>
       <p>Thursday | 13 July 2023</p>
  </div>


</div>
 <div className='cloud-imag'></div>
</div>

    
  </>
  );
}

export default Header;