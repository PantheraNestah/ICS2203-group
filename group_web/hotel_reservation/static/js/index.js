const reservationForm = document.querySelector("form")
reservationForm.addEventListener("submit", (form) => {
    form.preventDefault()
    const formData = new FormData(form.target)
    const jsonData = {}
    formData.forEach((value, key) => {
        jsonData[key] = value
    })
    console.log(jsonData)
    alert("Welcome,your room booking was successful!")
})
function sendData(url,data){
    fetch(url, 
        {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        }
    )
}
