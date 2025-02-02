// Three.js Forex Globe
const globeScene = new THREE.Scene();
const globeCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const globeRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
globeRenderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('globe3d').appendChild(globeRenderer.domElement);

// Load 3D Earth Model
const loader = new THREE.GLTFLoader();
loader.load('assets/models/forex-earth.glb', (gltf) => {
  const globe = gltf.scene;
  globe.scale.set(1.5, 1.5, 1.5);
  globeScene.add(globe);
  
  // Add city lights for major forex markets
  const cities = [
    { lat: 40.71, lon: -74.00, color: 0xFF0000 }, // NYC
    { lat: 51.50, lon: -0.11, color: 0x00FF00 },  // London
    { lat: 35.68, lon: 139.69, color: 0x0000FF }  // Tokyo
  ];

  cities.forEach(city => {
    const light = new THREE.PointLight(city.color, 1, 100);
    const phi = THREE.MathUtils.degToRad(90 - city.lat);
    const theta = THREE.MathUtils.degToRad(city.lon);
    light.position.setFromSphericalCoords(5, phi, theta);
    globe.add(light);
  });
});

globeCamera.position.z = 8;

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".strategy-card", {
  scrollTrigger: ".strategy-section",
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.3
});

// Real-time Metrics Animation
function updateMetrics() {
  gsap.to("#stopLoss", {
    duration: 1,
    innerText: Math.random().toFixed(1) + "%",
    snap: { innerText: 0.1 },
    modifiers: {
      innerText: value => parseFloat(value).toFixed(1) + "%"
    }
  });
}

setInterval(updateMetrics, 3000);

// Web3 Wallet Integration
document.getElementById('connectWallet').addEventListener('click', () => {
  document.getElementById('walletModal').style.display = 'grid';
});

document.getElementById('metaMask').addEventListener('click', async () => {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Connected:', accounts[0]);
      document.getElementById('walletModal').style.display = 'none';
    } catch (error) {
      console.error(error);
    }
  }
});

// Responsive 3D Scene
window.addEventListener('resize', () => {
  globeCamera.aspect = window.innerWidth / window.innerHeight;
  globeCamera.updateProjectionMatrix();
  globeRenderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  if (globeScene.children[0]) {
    globeScene.children[0].rotation.y += 0.002;
  }
  globeRenderer.render(globeScene, globeCamera);
}
animate();