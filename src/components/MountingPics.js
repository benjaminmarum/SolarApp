import React from 'react';



const MountingPics = ({ FlashingImage, MountingImage }) => {
  return (
    <div id='mountingPics'>

      <div id='flashing'>
        <img id='flashingPic' src={FlashingImage} alt=" Select a Flashing Kit"/>
      </div>

      <div id='spacer'> </div>
      
      <div id='mounting'>
        <img id='mountPic' src={MountingImage} alt=" Select a Mounting Kit"/>
      </div>
      
    </div>
  );
};

export default MountingPics;