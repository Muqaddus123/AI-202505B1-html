
// localStorage
localStorage.setItem("name", "zain")
localStorage.setItem("email", "zain@gmail.com")

let data = localStorage.getItem("name")
document.write(data)

// sessionStorage
sessionStorage.setItem("name", "faiz")
alert(sessionStorage.getItem("name"))

sessionStorage.removeItem("name")

// cookies

document.cookie = "cookie1 = hello" //persistant

document.cookie = "cookie2 = hello world; max-age "+ 60*60*24
document.cookie = "cookie3 = hello world; max-age"+60