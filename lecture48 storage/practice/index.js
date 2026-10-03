


async function getUser(username = "alokmaurya12277") {
     
    let getInfo= await fetch(`https://api.github.com/users/${username}`)
    let data = await getInfo.json()
    console.log(data);
    return data
}
getUser()

document.querySelector("#form").addEventListener("submit" , async (e)=>{
    e.preventDefault();

    let userInput = document.querySelector("#input").value
    let aagya = await getUser(userInput)

    document.querySelector("#div").innerHTML = `
        <img src=${aagya.avatar_url}  alt=""> <br>
         <i>${aagya.name}</i>
        <p>${aagya.url} </p>
        <p>${aagya.followers} </p>
        <p>${aagya.following} </p>
        <p>${aagya.type}</p>
        <p>${aagya.user_view_type}
        `
})