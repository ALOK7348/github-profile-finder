const searchBtn =
document.getElementById(
'searchBtn'
);

searchBtn.addEventListener(
'click',
getProfile
);

async function getProfile(){

const username=

document.getElementById(
'username'
).value;


if(!username){

alert(
'Enter username'
);

return;

}

try{

const response=

await fetch(

`https://api.github.com/users/${username}`

);

const data=

await response.json();

if(data.message==="Not Found"){

document
.getElementById(
'profile'
)
.innerHTML=`

<h2>

User not found 😢

</h2>

`;

return;

}

displayProfile(data);

}
catch(error){

console.log(error);

}

}

function displayProfile(user){

const profile=

document.getElementById(
'profile'
);

profile.innerHTML=`

<h2>

${user.name}

</h2>

<img
src="${user.avatar_url}"
width="150"
style="
border-radius:50%;
margin-top:10px;
">

<p>

Followers:
${user.followers}

</p>

<p>

Following:
${user.following}

</p>

<p>

Public Repos:
${user.public_repos}

</p>

`;

}