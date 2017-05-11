const fetch = require("node-fetch")

const toJson = r => r.json()

async function showGitHubUser(handle) {
  const response = await fetch(`https://api.github.com/users/${handle}`)
  return await response.json()
} 

async function showGitHubUser2(handle) {
  return await toJson(await fetch(`https://api.github.com/users/${handle}`))  
}

showGitHubUser("ronnross")
  .then(user => {
    console.log(user.name)
    console.log(user.location)
  })