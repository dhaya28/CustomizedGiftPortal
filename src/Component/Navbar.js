import '../Style/Navbar.css'
import { useNavigate } from 'react-router-dom'
import { MyContext } from './ProjectContext';
import React, { useContext } from 'react';
import PersonIcon from '@mui/icons-material/Person';
function Navbar() {
  const navigate = useNavigate();
  const logoutButton = () => { navigate('/') }
  const homeButton = () => { navigate('/home') }
  const { InputUsername } = useContext(MyContext);
  const bgHoverEnter = (event) => { event.target.style.backgroundColor = 'rgb(254, 53, 53)'; event.target.style.color = 'white' }
  const bgHoverLeave = (event) => { event.target.style.backgroundColor = 'white'; event.target.style.color = 'rgb(254, 53, 53)' }

  return (
    <div>
      <div style={{ backgroundColor: "rgb(253, 36, 36)", width: "100%", height: "10vh", textAlign: "center", paddingTop: "1vh" }}>
        Use code "FLAT10" to get 10% off on all products
        <h3 style={{ color: "white", float:"left"}}>
          <PersonIcon sx={{ fontSize: 30,color:'black' }}/>
          {InputUsername}
        </h3>
      </div>
      <ul>
        <li><button onClick={homeButton} onMouseEnter={bgHoverEnter} onMouseLeave={bgHoverLeave}>Home</button></li>
        <li><button onClick={homeButton} onMouseEnter={bgHoverEnter} onMouseLeave={bgHoverLeave}>Personalized</button></li>
        <li class="dropdown">
          <button href="javascript:void(0)" class="dropbtn">Occasions</button>
          <div class="dropdown-content">
            <button style={{ width: "180px" }} onClick={homeButton} onMouseEnter={bgHoverEnter} onMouseLeave={bgHoverLeave}>Birthday</button>
            <button style={{ width: "180px" }} onClick={homeButton} onMouseEnter={bgHoverEnter} onMouseLeave={bgHoverLeave}>Marriage</button>
            <button style={{ width: "180px" }} onClick={homeButton} onMouseEnter={bgHoverEnter} onMouseLeave={bgHoverLeave}>Anniversary</button>
          </div>
        </li>
        <li class="dropdown">
          <button href="javascript:void(0)" class="dropbtn">Festival</button>
          <div class="dropdown-content">
            <button style={{ width: "180px" }} onClick={homeButton} onMouseEnter={bgHoverEnter} onMouseLeave={bgHoverLeave}>Christmas</button>
            <button style={{ width: "180px" }} onClick={homeButton} onMouseEnter={bgHoverEnter} onMouseLeave={bgHoverLeave}>New Year</button>
            <button style={{ width: "180px" }} onClick={homeButton} onMouseEnter={bgHoverEnter} onMouseLeave={bgHoverLeave}>Children's Day</button>
          </div>
        </li>
        <li class="dropdown">
          <button href="javascript:void(0)" class="dropbtn">Chocolates</button>
          <div class="dropdown-content">
            <button style={{ width: "180px" }} onClick={homeButton} onMouseEnter={bgHoverEnter} onMouseLeave={bgHoverLeave}>Milk Chocolates</button>
            <button style={{ width: "180px" }} onClick={homeButton} onMouseEnter={bgHoverEnter} onMouseLeave={bgHoverLeave}>Dark Chocolates</button>
            <button style={{ width: "180px" }} onClick={homeButton} onMouseEnter={bgHoverEnter} onMouseLeave={bgHoverLeave}>SugarFree Chocolates</button>
          </div>
        </li>
        <li style={{ float: "right" }}><button onClick={logoutButton} onMouseEnter={bgHoverEnter} onMouseLeave={bgHoverLeave}>Log Out</button></li>
        <li><button onClick={homeButton} onMouseEnter={bgHoverEnter} onMouseLeave={bgHoverLeave}>Contact</button></li>
        <li><button onClick={homeButton} onMouseEnter={bgHoverEnter} onMouseLeave={bgHoverLeave}>About</button></li>
      </ul>
      <hr></hr>
    </div>
  );
}

export default Navbar;
