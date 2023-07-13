import './me.scss';
import img from '../../images/Glib.jpeg';
import icon1 from '../../images/mobile.svg';
import icon2 from '../../images/command.svg';
import icon3 from '../../images/github.svg';
import icon4 from '../../images/linkedin.svg';
import icon5 from '../../images/location.svg';
const Me = () => (
   <div className='box'>
   <div className='blok-img'>  
    <img src={img} alt='Glib' className='foto_size'/>
    <div className='sub-title'>
      <ul>
      <li><img src={icon1}/><a href="tel:+380-93-24-70-908" className='info'>+380-93-24-70-908</a></li>
      <li><img src={icon2}/><a href="mailto:gleb.kalmikov@gmail.com" target="_blank" className='info'>Send Email</a></li>
        <li><img src={icon3} /><a href="https://github.com/GlebKalmikov" target="_blank" className="info">GitHub</a></li>
        <li><img src={icon4} /><a href="https://www.linkedin.com/in/gleb-kalmikov/" target="_blank" className="info">linkedin</a></li>
        <li><img src={icon5} /><a href="https://www.google.com/maps/place/%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8235551,23.9397147,13.01z/data=!4m15!1m8!3m7!1s0x473add7c09109a57:0x4223c517012378e2!2z0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!3b1!8m2!3d49.839683!4d24.029717!16zL20vMGQ3X24!3m5!1s0x473add7c09109a57:0x4223c517012378e2!8m2!3d49.839683!4d24.029717!16zL20vMGQ3X24?entry=ttu" target="_blank" className="info">Lviv</a></li>
      </ul>
    </div></div>
 
    <div className='titel'>
    <h1>GLIB KALMYKOV</h1>
      <h4>I'm on my way to mastering front-end react developer</h4>
      <p>I am an individual who is constantly motivated by the challenge of solving complex tasks. Over the course of four months of studying at Beetroot courses, I dedicated myself to improving my skills and deepening my understanding of frontend development. As a result, I have gained comprehensive knowledge of various technologies and tools, including:</p>
      <ul>
        <li>Website development using preprocessors.</li>
        <li>Version control system Git and GitHub.</li>
        <li>Graphic editors Figma and Photoshop.</li>
        <li>Mastering responsive web design.</li>
        <li>Basic understanding of JavaScript concepts: I have acquired a strong foundation in JavaScript, including fundamental concepts such as variables, functions, loops, and conditions.</li>
        <li>Working with the Document Object Model (DOM): I have practical experience manipulating elements of web pages.</li>
        <li>Event handling in JavaScript and React.</li>
        <li>Implementation of asynchronous JavaScript (AJAX): I have gained knowledge and experience in using AJAX to perform asynchronous requests to the server and dynamically update web page content without page reloads.</li>
        <li>Familiarity with libraries such as jQuery, Material-UI, and Ant Design.</li>
        <li>Working with web storage, particularly local storage.</li>
        <li>Utilizing Gulp for development optimization, although it was more of a hindrance than a help.</li>
      </ul>
      <p>By combining these skills and tools, I am capable of creating visually appealing, responsive, and interactive websites while effectively managing my codebase and ensuring optimal performance. I strive to quickly apply the knowledge I have gained and continue learning new technologies in the field of frontend development.</p>
    </div>

   

   </div>
)

export default Me;
