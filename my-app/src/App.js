import './App.css';

function App() {
  //it is very important to set correct path to your file!!!!!!

  const image= ['./images/photo-1.jpeg','./images/photo-2.jpeg','./images/photo-3.jpeg','./images/photo-4.jpeg','./images/photo-5.jpeg'];

  return (
    <div className ="App">
      <header>
        Photoes pro
      </header>
      <div className='container'>
        <div className='img-txt'>
          <img className="photo" alt="photo1" src={image[0]} />
        </div>
        <div className='img-txt'>
          <img className="photo" alt="photo1" src={image[1]} />
        </div>
        <div className='img-txt'>
          <img className="photo" alt="photo1" src={image[2]} />
        </div>
        <div className='img-txt'>
          <img className="photo" alt="photo1" src={image[3]} />
        </div>
        <div className='img-txt'>
          <img className="photo" alt="photo1" src={image[4]} />
        </div>
        
      </div>    
    </div>  
  );
}

export default App;
