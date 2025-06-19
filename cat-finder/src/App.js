import Photo from "./Photo";
import "./App.css"
function App() {
  return (
    <div className="App">
      <header style={{width: "100%", borderBottom: "1px solid black", textAlign:"center",height:"65px",display:"flex", justifyContent:"center", alignItems:"center"}}>
        <p style={{fontFamily:"sans-serif",display:"flex", justifyContent:"center", alignItems:"center", fontSize:"20px"}}> <span className='material-icons'>set_meal</span> PawPrint <span className='material-icons'>pets</span> </p>
     </header>
     <main className="cont">
      <Photo></Photo>
     </main>
     
    </div>
  );
}

export default App;
