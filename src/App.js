import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const data={
    fullName:"Amine zaidi",
    Bio:"technicien superieur en electronique industrielle diplomé en institut supérieure gestion industriel",
    Profession:"technicien superieur"
  }
  const childrenprops='/amine.jpg'
  const handleName =()=>alert(`My name is ${data.fullName}`)
  
  return (
    <div className="App">
      <div className='profile-card '>
      <Profile myprofile={data} boutton={handleName}>
        {childrenprops}
      </Profile>
      </div>
    </div>
  );
}
export default App;
