const socialMediaLinks = {
  github: 'fabianocsouza',
  youtube: '',
  facebook: 'fabianocardozosouza',
  instagram: 'fabianoc.souzaa',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfo() {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      nameUser.textContent = data.name
    })
}

getGithubProfileInfo()
