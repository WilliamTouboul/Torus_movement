/* ----------------------------- Creation Scene ----------------------------- */
const scene = new THREE.Scene();

/* ----------------------------- Creation Camera ---------------------------- */
const fov = 45;
// Variable pour changer le ratio plus facilement
const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(fov, aspectRatio);
//TOUJOURS ajouter ce qu'on créé a la scene.
camera.position.z = 3;
camera.position.x = -1.2
scene.add(camera)

/* -------------------------------- textures -------------------------------- */
const textureLoader = new THREE.TextureLoader();
const matcap_texture = textureLoader.load('assets/3d_models/matcap_1.png');

/* ------------------------------- Ajout cube ------------------------------- */
const geometry = new THREE.TorusKnotGeometry(0.5, 0.2, 3000);
const material = new THREE.MeshMatcapMaterial({
    // color: 0xf9ff8f
    matcap: matcap_texture
});

// mesh = geometry + material TOUJOURS.
const mesh = new THREE.Mesh(geometry, material);
// mesh.rotation.y = 0.5; //Rad, (1 = 1*pi = demi cercle.)
scene.add(mesh);



/* ---------------------------- Création Renderer --------------------------- */
const renderer = new THREE.WebGLRenderer({
    alpha: 'true'
});
// Pour que le canvas prenne TOUTE la page.
renderer.setSize(window.innerWidth, window.innerHeight);
// On ajoute au BODY le "renderer.domElement", canvas généré par THREE.js
document.body.append(renderer.domElement);
//Creation du render avec la scene ET la camera.



window.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
        console.log('scrolling up');
        mesh.rotation.x += 0.1
    } else if (event.deltaY > 0) {
        console.log('scrolling down');
        mesh.rotation.x += -0.1
    }
});

const tick = () => {
    requestAnimationFrame(tick);
    mesh.rotation.y += 0.02;

    renderer.render(scene, camera)
}
tick();