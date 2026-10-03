

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     let data = xhr.response;
//     console.log(data);
// }
// xhr.open("GET","https://api.github.com/users/nishantsaini2331",true)
// xhr.send();


// fetch("https://api.github.com/users/nishantsaini2331").
// then(data => data.json()).
// then(data => console.log(data))


async function gitUser(usename = "alokmaurya12277"){
    let response = await fetch(`https://api.github.com/users/${usename}`)
    const data = await response.json()

    console.log(data);
    return data
}
gitUser()

document.querySelector("#github-form").addEventListener("submit",async (e)=>{
    e.preventDefault();

   let username = document.querySelector("#github-username").value
   let data = await gitUser(username)

   document.querySelector("#show-frofile").innerHTML = `
   <img src=${data.avatar_url}  alt="">
    <h2>${data.name}</h2>
    <i>username: ${data.login}</i>
    <p>bio : ${data.bio}</p>
    <p>followers : ${data.followers}</p>
    <p>following : ${data.following}</p>
    <p>public repos : ${data.public_repos}</p> `
})