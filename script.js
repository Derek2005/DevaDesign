// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, 500);
document.getElementById('threejs-container').appendChild(renderer.domElement);

// Add lighting
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Create a 3D cube
const geometry = new THREE.BoxGeometry();
const materials = [
  new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Red
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Green
  new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Blue
  new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Yellow
  new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Magenta
  new THREE.MeshBasicMaterial({ color: 0x00ffff }), // Cyan
];
const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);

// Camera position
camera.position.z = 3;

// Add orbit controls for interactivity
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}

animate();

// Make the canvas responsive
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, 500);
  camera.aspect = window.innerWidth / 500;
  camera.updateProjectionMatrix();
});
