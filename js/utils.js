const internals = {};

internals.W = window.innerWidth || 500;
internals.H = window.innerHeight || 500;

internals.randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

internals.materials = {
  orange: new THREE.MeshPhongMaterial({ color: 0xB7513C, flatShading: true }),
  green:  new THREE.MeshPhongMaterial({ color: 0x379351, flatShading: true }),
  brown:  new THREE.MeshPhongMaterial({ color: 0x5C2C22, flatShading: true }),
  pink:   new THREE.MeshPhongMaterial({ color: 0xB1325E, flatShading: true }),
  gray:   new THREE.MeshPhongMaterial({ color: 0x666666, flatShading: true }),
  clouds: new THREE.MeshPhongMaterial({ color: 0xeeeeee, flatShading: true }),
  rabbit: new THREE.MeshPhongMaterial({ color: 0xaaaaaa, flatShading: true })
};

internals.shadowSupport = (group) => {
  group.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });
};
