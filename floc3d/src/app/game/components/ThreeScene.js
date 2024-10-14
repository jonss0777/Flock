import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const houseRef = useRef();

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create a ground plane
    const planeGeometry = new THREE.PlaneGeometry(100, 100);
    const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, side: THREE.DoubleSide });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2; // Rotate to horizontal
    scene.add(plane);

    // Create a tree trunk
    const trunkGeometry = new THREE.CylinderGeometry(0.3, 0.3, 5);
    const trunkMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 }); // Brown color
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.set(0, 2.5, 0); // Position above the ground
    scene.add(trunk);

    // Create the house (tree house)
    const houseGeometry = new THREE.BoxGeometry(2, 2, 2);
    const houseMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 }); // Gold color
    const house = new THREE.Mesh(houseGeometry, houseMaterial);
    house.position.set(0, 5, 0); // Position the house on top of the trunk
    scene.add(house);
    houseRef.current = house;

    // Create a roof (pyramid shape)
    const roofGeometry = new THREE.ConeGeometry(1.5, 1, 4);
    const roofMaterial = new THREE.MeshBasicMaterial({ color: 0x8B0000 }); // Dark red color
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.set(0, 6, 0); // Position the roof above the house
    roof.rotation.y = Math.PI / 4; // Rotate to align with the house
    scene.add(roof);

    // Create a ladder (simplified)
    const ladderGeometry = new THREE.BoxGeometry(0.1, 3, 0.1);
    const ladderMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
    const ladder = new THREE.Mesh(ladderGeometry, ladderMaterial);
    ladder.position.set(1.1, 4, 0); // Position next to the house
    scene.add(ladder);

    // Camera setup
    camera.position.set(5, 5, 10);
    camera.lookAt(house.position);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null; // No JSX to return, as rendering is done in the effect
};

export default ThreeScene;
