const fetch = require("node-fetch")

const toJson = r => r.json()
const cp = method => (...fns) => initialValue => fns[method]((value, fn) => fn(value), initialValue);
const pipe = cp('reduce')
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

showGitHubUser2("ronnross")
  .then(user => {
    console.log(user.name)
    console.log(user.location)
  })