const API_URL = "https://dash.viheakode.online"
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVU0VSIiwiaWF0IjoxNzc2NTg2NTY3LCJleHAiOjE4MDgxMjI1Njd9.NYo8v4193WpZ-qqZE0lGxmagZDm2X6bU9vl8yaObSKQ"

async function sendMessage(data){
    const resp = await fetch(`${API_URL}/api/v1/messages`, {
        method: 'POST',
        headers: {
            "Authorization": `viheakode ${API_TOKEN}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const result = await resp.json();
    console.log(result)

}

async function fetchAllMessages(){
    const resp = await fetch(`${API_URL}/api/v1/messages`, {
        method: 'GET',
        headers: {
            "Authorization": `viheakode ${API_TOKEN}`
        }
    })
    const result = await resp.json();
    console.log(result)

}

document.getElementById("contactForm").addEventListener("submit", function (e){
    e.preventDefault()
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const appName = document.getElementById("appName").value;

    sendMessage(
        {
            name: name, 
            email: email, 
            message: message,
            appName: appName
        }
    )
})

fetchAllMessages()