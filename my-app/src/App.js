import './App.css';
import 'bootstrap';

function App() {
  //it is very important to set correct path to your file!!!!!!

  const image= [,,'./src/images/photo-3.jpeg','./src/images/photo-4.jpeg','./src/images/photo-5.jpeg'];

  return (
    <div className ="App">
      {/* <header>
        Photoes pro
      </header> */}
      
      <div className='container'>
        <div className='img-txt box1'>
            <p>Hey</p>
        </div>
        
        <div className='img-txt box2'>          
            <p>Let's</p>          
        </div>

        <div className='img-txt box3'>
          
          <p>Give</p>
        </div>
        <div className='img-txt box4'>
          
          <p>All</p>
        </div>
        <div className='img-txt box5'>
          
          <p>You can</p>
        </div>
        
      </div>    
    </div>  
  );
}

export default App;
