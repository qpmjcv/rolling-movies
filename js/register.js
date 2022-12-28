


function register(event) {
    event.preventDefault()
    let name = document.getElementById("name").value
    let surname = document.getElementById("surname").value
    let birthdate = document.getElementById("birthdate").value
    let gender = document.getElementById("gender").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    const user = {
        
        name,
        surname,
        birthdate,
        gender,
        email,
        password,
        isAdmin: false
    }


    fetch('http://localhost:3000/Users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

}

register()