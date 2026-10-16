import './style.css'

try {
  // Add StatelessSquad icon
  const iconLink = document.createElement('a')
  iconLink.id = 'stateless-icon'
  iconLink.href = 'https://github.com/StatelessSquad'
  iconLink.target = '_blank'
  iconLink.rel = 'noopener'
  iconLink.setAttribute('aria-label', 'StatelessSquad on GitHub')
  const iconImg = document.createElement('img')
  iconImg.src = './statelesssquad.png'
  iconImg.alt = 'StatelessSquad'
  iconLink.appendChild(iconImg)
  document.body.appendChild(iconLink)

  // Simple placeholder for game
  const root = document.getElementById('root')!
  root.innerHTML = `
    <h1>Animal Farm Kids</h1>
    <p>Game loading...</p>
  `

  // TODO: Initialize game here
  // If game initialization throws, it will be caught by the try/catch block
} catch (error) {
  console.error('Failed to initialize the game:', error)
  const root = document.getElementById('root')!
  root.innerHTML = `
    <h1>Animal Farm Kids</h1>
    <p style="color: darkred;">Failed to load the game. Please check the console for details.</p>
  `
}
