import './style.css'

try {
  console.log('Game init started');
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

  const root = document.getElementById('root')!
  console.log('Root element:', root);
  root.innerHTML = `
    <div id="game-container">
      <div id="chicken" class="chicken"></div>
    </div>
  `

  const chicken = document.getElementById('chicken') as HTMLElement
  const container = document.getElementById('game-container') as HTMLElement

  // Set container size
  container.style.width = '800px'
  container.style.height = '600px'
  container.style.backgroundColor = '#a8d08d' // light green farm
  container.style.position = 'relative'
  container.style.margin = '20px auto'
  container.style.border = '2px solid #6b8e23'
  container.style.borderRadius = '10px'
  container.style.overflow = 'hidden'

  // Chicken style (will be set in CSS but we can ensure)
  chicken.style.position = 'absolute'
  chicken.style.width = '50px'
  chicken.style.height = '50px'
  chicken.style.backgroundColor = '#ffeb3b' // yellow
  chicken.style.borderRadius = '50%'
  chicken.style.top = '50%'
  chicken.style.left = '50%'
  chicken.style.transform = 'translate(-50%, -50%)'
  chicken.style.cursor = 'grab'

  let posX = 0
  let posY = 0
  const speed = 5 // px per frame

  const updatePosition = (dx: number, dy: number) => {
    posX += dx * speed
    posY += dy * speed
    // Boundaries
    const maxX = container.clientWidth - chicken.clientWidth
    const maxY = container.clientHeight - chicken.clientHeight
    if (posX < 0) posX = 0
    if (posX > maxX) posX = maxX
    if (posY < 0) posY = 0
    if (posY > maxY) posY = maxY
    chicken.style.transform = `translate(${posX}px, ${posY}px)`
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    const key = e.key.toLowerCase()
    let dx = 0,
      dy = 0
    if (key === 'w' || key === 'arrowup') dy = -1
    if (key === 's' || key === 'arrowdown') dy = 1
    if (key === 'a' || key === 'arrowleft') dx = -1
    if (key === 'd' || key === 'arrowright') dx = 1
    if (dx !== 0 || dy !== 0) {
      e.preventDefault()
      updatePosition(dx, dy)
    }
  }

  window.addEventListener('keydown', handleKeyDown)

  // Optional: add touch? Not needed.

} catch (error) {
  console.error('Failed to initialize the game:', error)
  const root = document.getElementById('root')!
  root.innerHTML = `
    <h1>Animal Farm Kids</h1>
    <p style="color: darkred;">Failed to load the game. Please check the console for details.</p>
  `
}
