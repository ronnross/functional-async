const fetch = require("node-fetch")

const toJson = r => r.json()

const showGitHubUser = handle => fetch(`https://api.github.com/users/${handle}`)
                                 .then(toJson)

showGitHubUser("ronnross")
.then(user => {
  console.log(user.name)
  console.log(user.location)
})