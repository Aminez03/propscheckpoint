
import { Button } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

const Profile = ({myprofile,children,boutton}) => {
  console.log(boutton)
  return (
    <div >
      <img className='image' src={children} alt="" />
      <h1 className='name'>{myprofile.fullName}</h1>
      <h2 className='txt'>{myprofile.Bio}</h2>
      <h6 className='proffesion'>{myprofile.Profession}</h6>
      <a href="https://www.facebook.com/amin.zaidi03" > 
      <i className="fa-brands fa-facebook"></i></a>
      <a href="https://www.instagram.com/amin_zaidii/">
      <i class="fa-brands fa-instagram"></i>
      </a>
      <div className="ok">

      <Button variant="contained"  onClick={boutton}>follow</Button>
      </div>
      
  
      </div>
  )
}
Profile.propTypes = {
  children: PropTypes.string,
};
export default Profile