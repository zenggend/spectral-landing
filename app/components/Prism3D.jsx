"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Prism3D({ isSubmitted = false }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    let width = containerRef.current.clientWidth;
    let height = containerRef.current.clientHeight || 450;

    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // Create renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const prismColorLight = new THREE.PointLight(0x7de4d8, 2, 8);
    prismColorLight.position.set(0, 0, 1);
    scene.add(prismColorLight);

    // Prism Group (to hold the mesh and internal line)
    const prismGroup = new THREE.Group();
    
    // Triangular prism geometry
    // CylinderGeometry(radiusTop, radiusBottom, height, radialSegments)
    // radialSegments = 3 creates a triangular prism!
    const prismGeom = new THREE.CylinderGeometry(1.2, 1.2, 2.6, 3);
    
    // Glass Material
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.28,
      transmission: 0.92,
      ior: 1.55,
      thickness: 2.2,
      roughness: 0.04,
      metalness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      side: THREE.DoubleSide,
      depthWrite: true,
    });

    const prismMesh = new THREE.Mesh(prismGeom, glassMaterial);
    prismMesh.rotation.y = Math.PI / 6; // align flat face
    prismGroup.add(prismMesh);

    // Prism outline edges to make it pop
    const edges = new THREE.EdgesGeometry(prismGeom);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.38,
      blending: THREE.AdditiveBlending,
    });
    const prismOutline = new THREE.LineSegments(edges, lineMaterial);
    prismOutline.rotation.y = Math.PI / 6;
    prismGroup.add(prismOutline);

    scene.add(prismGroup);

    // Beams setup
    // 1. Input beam (White light entering the prism)
    const inputBeamGeom = new THREE.CylinderGeometry(0.04, 0.04, 8, 8, 1, true);
    inputBeamGeom.rotateZ(Math.PI / 2); // lay horizontal
    const inputBeamMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    const inputBeam = new THREE.Mesh(inputBeamGeom, inputBeamMat);
    // position it to end at the prism face (approximately -0.7 x)
    inputBeam.position.set(-4.5, -0.05, 0);
    scene.add(inputBeam);

    // 2. Refracted output beams (Rainbow colors exiting the prism)
    const outputBeamsGroup = new THREE.Group();
    // Offset the group slightly to the right of the prism center
    outputBeamsGroup.position.set(0.6, -0.05, 0);
    scene.add(outputBeamsGroup);

    const colors = [
      { hex: 0xff4b4b, angle: -0.22, factor: 0.95 },   // Red
      { hex: 0xff914d, angle: -0.13, factor: 1.00 },   // Orange
      { hex: 0xffdf4d, angle: -0.04, factor: 1.05 },   // Yellow
      { hex: 0x4ddf91, angle: 0.05, factor: 1.10 },    // Green
      { hex: 0x4d91ff, angle: 0.14, factor: 1.15 },    // Blue
      { hex: 0xb54dff, angle: 0.23, factor: 1.20 }     // Violet
    ];

    const beamMeshes = [];
    colors.forEach((c) => {
      // Cylinder that expands outwards (cone)
      // CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded)
      const beamGeom = new THREE.CylinderGeometry(0.03, 0.44, 7.5, 12, 1, true);
      beamGeom.translate(0, 3.75, 0); // shift pivot to start of cylinder
      beamGeom.rotateZ(-Math.PI / 2); // lay along X axis
      
      const beamMat = new THREE.MeshBasicMaterial({
        color: c.hex,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false,
      });

      const beamMesh = new THREE.Mesh(beamGeom, beamMat);
      beamMesh.rotation.z = c.angle;
      outputBeamsGroup.add(beamMesh);
      beamMeshes.push({
        mesh: beamMesh,
        originalAngle: c.angle,
        factor: c.factor,
        mat: beamMat
      });
    });

    // 3. Floating cinematic dust particles
    const particleCount = 140;
    const particleGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleSpeeds = [];

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 9;
      positions[i + 1] = (Math.random() - 0.5) * 5;
      positions[i + 2] = (Math.random() - 0.5) * 5;
      
      particleSpeeds.push({
        x: (Math.random() - 0.5) * 0.005,
        y: Math.random() * 0.01 + 0.003,
        z: (Math.random() - 0.5) * 0.005
      });
    }

    particleGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    
    // Create a circular smooth particle map using canvas
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 16;
    pCanvas.height = 16;
    const pCtx = pCanvas.getContext("2d");
    const pGrad = pCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
    pGrad.addColorStop(0, "rgba(255,255,255,1)");
    pGrad.addColorStop(1, "rgba(255,255,255,0)");
    pCtx.fillStyle = pGrad;
    pCtx.fillRect(0, 0, 16, 16);
    
    const pTexture = new THREE.CanvasTexture(pCanvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      map: pTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // Mouse and Scroll tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const scroll = { y: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const handleMouseLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
    };

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scroll.targetY = docHeight > 0 ? window.scrollY / docHeight : 0;
    };

    containerRef.current.addEventListener("pointermove", handleMouseMove);
    containerRef.current.addEventListener("pointerleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Handle initial scroll state
    handleScroll();

    // Animation variables
    let clock = new THREE.Clock();
    let animId = null;

    // For smooth transitions on submission
    let submissionProgress = isSubmitted ? 1.0 : 0.0;
    let localSubmitted = isSubmitted;

    const handleWindowSubmit = () => {
      localSubmitted = true;
    };
    window.addEventListener("prism-submit", handleWindowSubmit);

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();
      
      // Interpolate mouse & scroll values for buttery smoothness
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;
      scroll.y += (scroll.targetY - scroll.y) * 0.12;

      // Handle submission state transition
      const activeSubmitted = isSubmitted || localSubmitted;
      if (activeSubmitted && submissionProgress < 1.0) {
        submissionProgress += 0.035;
        if (submissionProgress > 1.0) submissionProgress = 1.0;
      } else if (!activeSubmitted && submissionProgress > 0.0) {
        submissionProgress -= 0.035;
        if (submissionProgress < 0.0) submissionProgress = 0.0;
      }

      // 1. Animate Prism rotation
      // slow idle float + mouse tilt + scroll sweep
      const baseRotationY = time * 0.18 + scroll.y * 3.5;
      prismGroup.rotation.y = baseRotationY + mouse.x * 0.35;
      prismGroup.rotation.x = Math.sin(time * 0.5) * 0.06 + mouse.y * 0.2;
      prismGroup.rotation.z = Math.cos(time * 0.4) * 0.04;
      
      // subtle vertical float
      prismGroup.position.y = Math.sin(time * 1.5) * 0.1;

      // 2. Animate Light Beams
      // Input beam oscillates slightly matching prism float
      inputBeam.position.y = prismGroup.position.y - 0.05;
      inputBeam.rotation.z = Math.sin(time * 0.3) * 0.01;

      // Output beams tilt and swing dynamically as the prism face rotates
      // Physics-based illusion: output beams group follows the prism's main rotation
      outputBeamsGroup.position.y = prismGroup.position.y - 0.05;
      outputBeamsGroup.rotation.y = prismGroup.rotation.y * 0.95;
      outputBeamsGroup.rotation.x = prismGroup.rotation.x;
      outputBeamsGroup.rotation.z = prismGroup.rotation.z;

      // submission power-up sequence visual effects
      // Beams expand, grow intense, and refract more broadly
      const beamScaleMultiplier = 1.0 + submissionProgress * 1.5;
      const opacityMultiplier = 1.0 - submissionProgress * 0.2; // keep it readable
      const rotationSpread = submissionProgress * 0.15; // spread rays wider

      beamMeshes.forEach((bm) => {
        // dynamic light pulse
        const pulse = 1.0 + Math.sin(time * 6 + bm.factor * 10) * 0.06;
        
        // Apply scales
        bm.mesh.scale.set(1, beamScaleMultiplier * pulse, beamScaleMultiplier * pulse);
        
        // Spread angles out wider on submission
        bm.mesh.rotation.z = bm.originalAngle + Math.sign(bm.originalAngle) * rotationSpread;
        
        // Brighten up beams
        bm.mat.opacity = (0.58 + Math.sin(time * 4) * 0.04) * (1.0 + submissionProgress * 0.4) * opacityMultiplier;
      });

      // Pulse white input beam too
      const inputPulse = 1.0 + Math.sin(time * 8) * 0.04;
      inputBeam.scale.set(1, (1.0 + submissionProgress * 1.2) * inputPulse, (1.0 + submissionProgress * 1.2) * inputPulse);
      inputBeamMat.opacity = 0.75 + submissionProgress * 0.25;

      // Intensify point light color on submission
      prismColorLight.intensity = 2.0 + submissionProgress * 4.0;
      prismColorLight.position.x = Math.sin(time * 2) * 0.3;

      // 3. Animate particles
      const posArr = particleGeom.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        posArr[idx] += particleSpeeds[i].x;
        posArr[idx + 1] += particleSpeeds[i].y * (1.0 + submissionProgress * 1.5); // speed up on submit
        posArr[idx + 2] += particleSpeeds[i].z;

        // Wrap around height limits
        if (posArr[idx + 1] > 3.5) {
          posArr[idx + 1] = -3.5;
          posArr[idx] = (Math.random() - 0.5) * 9;
          posArr[idx + 2] = (Math.random() - 0.5) * 5;
        }
      }
      particleGeom.attributes.position.needsUpdate = true;
      
      // Rotate particles group slightly
      particles.rotation.y = time * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight || 450;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(containerRef.current);

    // Clean up
    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("prism-submit", handleWindowSubmit);
      if (containerRef.current) {
        containerRef.current.removeEventListener("pointermove", handleMouseMove);
        containerRef.current.removeEventListener("pointerleave", handleMouseLeave);
      }
      
      // Dispose resources
      prismGeom.dispose();
      glassMaterial.dispose();
      edges.dispose();
      lineMaterial.dispose();
      inputBeamGeom.dispose();
      inputBeamMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      pTexture.dispose();
      
      beamMeshes.forEach((bm) => {
        bm.mesh.geometry.dispose();
        bm.mat.dispose();
      });
    };
  }, [isSubmitted]);

  return (
    <div ref={containerRef} className="prism3d-container" style={{ width: "100%", height: "100%", position: "relative" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
}
