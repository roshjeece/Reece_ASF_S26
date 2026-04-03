import {useState, useEffect} from "react";
import {Button, Image} from "react-bootstrap";


const App = () => {
  // set up state
  //   let initialSrcValue = "https://images.dog.ceo/breeds/australian-shepherd/pepper.jpg"
  const [imgPath, setImgPath] = useState("")

    useEffect(() => {
        handleClickForRandomImage();
    }, []);


  const handleClickForRandomImage = () => {
    console.log("Clicked!!!")
    let endpoint = "https://dog.ceo/api/breed/australian/shepherd/images/random"
    fetch(endpoint)
        .then(response => {
          if(response.ok){
            return response.json()
          } else {
            throw Error("Response is not okay!")
          }
        })
        .then(parsedData => {
          console.log(parsedData.message)
          // do NOT directly mutate data. use the constructor!
          setImgPath(parsedData.message)
        })
        .catch(error => {
          console.log(error)
        })

  }

  return (
      <>
        <h1>Dog Image Generator</h1>
          <Button variant="danger">DO NOT PRESS</Button>
        <button onClick={handleClickForRandomImage}>Click for Random Image</button>
          {imgPath && <Image src={imgPath} roundedCircle />}
      </>
  )
}
export default App;