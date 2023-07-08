import React , { useState } from "react";

function MyImage({ src,refs }) {
    const [loaded, setLoaded] = useState(false);
  
    const handleImageLoad = () => {
      setLoaded(true);
    };



    return (
      <div ref={refs}  className="my-image">

        {
          !loaded &&   <div  className="placeholder-image"></div>
        }
      
          <img src={src} class="card-img-top" style={{display: loaded? 'block': 'none'}}

          alt="My Image" onLoad={handleImageLoad} />
    
      </div>
    );
  }
  export default MyImage