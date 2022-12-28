console.log(localStorage)


const users = fetch("http://localhost:3000/Users") 
  .then(response => response.json())
  .then(data => data.JSON)

localStorage.setItem(users, JSON.stringify(users))


function saludar() {

    if (!localStorage.getItem("user")) {
        localStorage.setItem("user" `${usuario.name}`)
        alert(`El usuario ${localStorage.getItem("user")}, ha sido creado`)
    } else {
        alert(`Hola ${localStorage.getItem("user")}, bienvenido nuevamente`)
    }

    const usuario = JSON.parse(localStorage.getItem("users")) 
}

saludar()


