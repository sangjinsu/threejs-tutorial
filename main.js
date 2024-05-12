import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer();

// Set the size of the renderer
renderer.setSize(window.innerWidth, window.innerHeight);

// Append the renderer to the document body
document.body.appendChild(renderer.domElement);

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Set the camera position
camera.position.z = 5;

// Create a geometry
const geometry = new THREE.BoxGeometry();

// Create a material
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Create a mesh
const cube = new THREE.Mesh(geometry, material);

// Add the mesh to the scene
scene.add(cube);

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene with the camera
  renderer.render(scene, camera);
}

// Start the animation loop
animate();
