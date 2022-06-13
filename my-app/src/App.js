import './App.css';

function App() {
  //it is very important to set correct path to your file!!!!!!
  const image1= './images/photo-1.jpeg';
  return (
    <div className ="App">
        <img alt="photo1" src={image1} />
    </div>  
  );
}

export default App;
