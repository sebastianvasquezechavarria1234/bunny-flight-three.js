console.log('🥕🐰✈️☁️');

internals.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
internals.camera = new THREE.PerspectiveCamera(45, (internals.W/internals.H), 1, 1000);
internals.scene = new THREE.Scene();
internals.scene.fog = new THREE.Fog(0xd5f8f8, 100, 300);

// setup renderer
internals.renderer.setPixelRatio(window.devicePixelRatio);
internals.renderer.setClearColor(0xc5f5f5, .7);
internals.renderer.setSize(internals.W, internals.H);
internals.renderer.shadowMap.enabled = true;
document.body.appendChild(internals.renderer.domElement);

// setup camera
internals.camera.position.set(40, 20, 100);
internals.scene.add(internals.camera);

// controls
internals.controls = new THREE.OrbitControls(internals.camera, internals.renderer.domElement);
internals.controls.minDistance = 50;
internals.controls.maxDistance = 250;

(function setupLights() {
  const directional = new THREE.DirectionalLight(0xffffff, 1);
  directional.position.set(30, 20, 0);
  directional.castShadow = true;
  internals.scene.add(new THREE.AmbientLight(0xc5f5f5, 1));
  internals.scene.add(directional);
}());

(function createFloor(){
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#e0dacd';
  ctx.fillRect(0, 0, 512, 512);

  ctx.filter = 'blur(20px)';
  ctx.fillStyle = '#e0dacd';
  ctx.fillRect(0, 0, 512, 512);
  ctx.filter = 'none';

  const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 360);
  gradient.addColorStop(0, 'rgba(224, 218, 205, 1)');
  gradient.addColorStop(0.7, 'rgba(224, 218, 205, 0.8)');
  gradient.addColorStop(1, 'rgba(224, 218, 205, 0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(1000, 1000),
    new THREE.MeshBasicMaterial({ map: texture, transparent: true })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -100;
  internals.scene.add(floor);
}());

(function addElements() {
  internals.scene.add(new Carrot().mesh);
  internals.scene.add(new Cloud({ y: -5, z: 20 }).mesh);
  internals.scene.add(new Cloud({ y: 0, z: 10, delay: 1 }).mesh);
  internals.scene.add(new Cloud({ y: 15, z: -10, delay: .5 }).mesh);
  internals.scene.add(new Cloud({ y: -15, z: 10, delay: 2 }).mesh);
}())

internals.resizeHandler = () => {
  internals.W = window.innerWidth;
  internals.H = window.innerHeight;
  internals.renderer.setSize(internals.W, internals.H);
  internals.camera.aspect = internals.W / internals.H;
  internals.camera.updateProjectionMatrix()
}
window.addEventListener('resize', internals.resizeHandler, false);
internals.resizeHandler();

internals.render = () => internals.renderer.render(internals.scene, internals.camera)
TweenLite.ticker.addEventListener("tick", internals.render);
