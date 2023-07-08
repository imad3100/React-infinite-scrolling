

import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import MyImage from './componenents/MyImage'
import './styles/css/main.css'
/*
function App() {

  const [photos, setphotos] = useState([])
   const [page, setpage] = useState(1)
   const lastPhoto=useRef()


  useEffect(()=>{

    // Fetch random photos 

    fetch(`https://picsum.photos/v2/list?page=${Math.ceil(Math.random()*100)}&limit=3`)
    .then(response => response.json())
.then(data => {
  // Process the received data
  console.log(data);
  setphotos(prevPhotos => [...prevPhotos, ...data]);

})
.catch(error => {
  console.log('Error:', error);
});

  },[page])


  
  useEffect(()=>{
      if (lastPhoto.current) 
  observer.observe(lastPhoto.current);
  

  },[photos])  ;
  



  

  const observer = useCallback(
    new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Element is visible');
          setpage((prevPage) => prevPage + 1);
        } else {
          console.log('Element is hidden');
        }
      });
    }),
    [] // No dependencies needed as observer is only created once
  );

   


  return (
    
    <div className='container  '>
      {
        photos.map((photo,index)=>{
          const imageUrl = photo.download_url;
          if (index==photos.length-1) {

            return(<div  class="card  mt-5 mx-auto " >
            <img ref={lastPhoto} src={imageUrl} 
             style={{ backgroundColor: 'gray' }} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>)
          }

          return (<div class="card col-8 col-sm-6 mt-5 mx-auto " >
          <img  style={{ backgroundColor: 'gray' }}
           src={imageUrl} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>)

        })

      }
       </div>
    
  );
}
export default App;
*/

function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const lastPhoto = useRef();

  useEffect(() => {
    // Fetch random photos
    fetch(`https://picsum.photos/v2/list?page=${Math.ceil(Math.random() * 100)}&limit=3`)
      .then((response) => response.json())
      .then((data) => {
        setPhotos((prevPhotos) => [...prevPhotos, ...data]);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [page]);

  useEffect(() => {
    if (lastPhoto.current) {
      observer.observe(lastPhoto.current);
    }        
    console.log(photos);


  }, [photos]);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('Element is visible');
        setPage((prevPage) => prevPage + 1);
      } else {
        console.log('Element is hidden');
      }
    });
  },{rootMargin:'-200px'});

  return (
    <div className="container">
      {photos.map((photo, index) => {
        const imageUrl = photo.download_url;
        if (index === photos.length - 1) {
          return (
            <div className="card mt-5 mx-auto" key={photo.id}>
              <MyImage src={imageUrl} refs={lastPhoto} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        }

        return (
          <div className="card col-8 col-sm-6 mt-5 mx-auto" key={photo.id}>
            <MyImage src={imageUrl} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default App ;