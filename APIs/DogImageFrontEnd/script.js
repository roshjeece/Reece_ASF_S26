let button = document.querySelector("button")
let img = document.querySelector("img")

button.addEventListener("click", ()=>{
    // fetch scaffolding
    let endpoint = "https://dog.ceo/api/breed/australian/shepherd/images/random"
    fetch(endpoint) // using the endpoint, default is GET
        .then((data) => {
            console.log(data)
            if(data.ok) {
                return data.json() // returning parsed data
            } else {
                throw Error("it br0ke")
            }
        })
        .then(parsedData => {
            console.log(parsedData.message)
            img.setAttribute("src", parsedData.message)
        })
        .catch((error) => {
            console.log(error)
        })
})