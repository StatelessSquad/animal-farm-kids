import './style.css';

// Initialize Phaser game
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  }
};

const game = new Phaser.Game(config);

let chicken: Phaser.GameObjects.Sprite;
const speed = 200; // pixels per second

function preload() {
  // Load assets from assets folder
  this.load.svg('background', 'assets/background.svg');
  this.load.svg('chicken', 'assets/chicken.svg');
}

function create() {
  // Add background
  this.add.image(400, 300, 'background');

  // Add chicken sprite at center
  chicken = this.add.sprite(400, 300, 'chicken').setScale(0.5); // adjust size as needed

  // Enable physics on chicken
  this.physics.world.enable(chicken);
  chicken.body.setCollideWorldBounds(true); // keep within world bounds

  // Set world bounds to match background size
  this.physics.world.setBounds(0, 0, 800, 600);

  // Keyboard input
  this.input.keyboard?.on('keydown-W', () => { chicken.body.setVelocityY(-speed); });
  this.input.keyboard?.on('keydown-S', () => { chicken.body.setVelocityY(speed); });
  this.input.keyboard?.on('keydown-A', () => { chicken.body.setVelocityX(-speed); });
  this.input.keyboard?.on('keydown-D', () => { chicken.body.setVelocityX(speed); });
  this.input.keyboard?.on('keyup-W', () => { if (chicken.body.velocity.y < 0) chicken.body.setVelocityY(0); });
  this.input.keyboard?.on('keyup-S', () => { if (chicken.body.velocity.y > 0) chicken.body.setVelocityY(0); });
  this.input.keyboard?.on('keyup-A', () => { if (chicken.body.velocity.x < 0) chicken.body.setVelocityX(0); });
  this.input.keyboard?.on('keyup-D', () => { if (chicken.body.velocity.x > 0) chicken.body.setVelocityX(0); });

  // Optional: add touch support for mobile
  // this.input.on('pointermove', function (pointer: any) { ... });
}

function update(time: number, delta: number) {
  // Ensure chicken stays within bounds (already set via collideWorldBounds)
  // Optionally, we can add simple animation here
}
