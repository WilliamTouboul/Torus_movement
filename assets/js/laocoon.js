/* ----------------------------- Creation Scene ----------------------------- */
const scene = new THREE.Scene();

/* ----------------------------- Creation Camera ---------------------------- */
const fov = 45;
// Variable pour changer le ratio plus facilement
const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(fov, aspectRatio);
//TOUJOURS ajouter ce qu'on créé a la scene.
camera.position.x = -4;
camera.position.y = 4.5;
camera.position.z = 44;


scene.add(camera)

var gltfLoader = new THREE.GLTFLoader();
var global_ibex;

gltfLoader.load('assets/3d_models/laocoon/scene.gltf', function (gltf) {
    ibex = gltf.scene;
    global_ibex = ibex;
    ibex.rotation.y = -0.2;
    scene.add(ibex)
});


var gui = new dat.GUI();
gui.add(camera.position, 'x', -100, 100).step(0.5)
gui.add(camera.position, 'y', -100, 100).step(0.5)
gui.add(camera.position, 'z', -100, 100).step(0.5)
gui.add(camera.rotation, 'y', -2, 2).step(0.1)
gui.add(camera.rotation, 'x', -2, 2).step(0.1)


/* ---------------------------- Création Renderer --------------------------- */
const renderer = new THREE.WebGLRenderer({
    alpha: 'true'
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);

const color = 0xf8fcb2;
const intensity = 4;
const light = new THREE.DirectionalLight(color, intensity);
light.target.position.set(-7.2, 8.7, -10);
scene.add(light);
scene.add(light.target);

const color2 = 0xdc6d0b;
const intensity2 = 1.21;
const light2 = new THREE.DirectionalLight(color2, intensity2);
light2.target.position.set(4, 0.52, 2.7);
scene.add(light2);
scene.add(light2.target);



renderer.gammaOutput = true


document.querySelector('.button_1').addEventListener("click", function () {
    var tl = gsap.timeline();
    tl.to(camera.position, {
        x: -4,
        y: 4.5,
        z: 44,
        duration: 1,
        ease: 'none'
    }, 1)
    tl.to(camera.position, {
        x: -1,
        y: 12,
        z: 19,
        duration: 1.5, // Durée
        ease: Power4.easeOut // Easing
    }, 2);
    tl.to(camera.rotation, {
        y: 0.5,
        duration: 0.5, // Durée
    }, 2);
});

document.querySelector('.button_2').addEventListener("click", function () {
    var tl = gsap.timeline();
    tl.to(camera.position, {
        x: -4,
        y: 4.5,
        z: 44,
        duration: 1,
        ease: 'none'
    }, 1)
    tl.to(camera.position, {
        x: -11.5,
        y: 8,
        z: 23,
        duration: 1.5, // Durée
        ease: Power4.easeOut // Easing
    }, 2);
    tl.to(camera.rotation, {
        y: -0.3,
        x: -0.3,
        duration: 0.5, // Durée
    }, 2);
});

document.querySelector('.button_3').addEventListener("click", function () {
    var tl = gsap.timeline();
    tl.to(camera.position, {
        x: -4,
        y: 4.5,
        z: 44,
        duration: 1,
        ease: 'none'
    }, 1)
    tl.to(camera.position, {
        x: -3,
        y: 3.5,
        z: 21,
        duration: 1.5, // Durée
        ease: Power4.easeOut // Easing
    }, 2);
    tl.to(camera.rotation, {
        y: -1,
        x: -0.1,
        duration: 0.5, // Durée
    }, 2);
});


const tick = () => {
    requestAnimationFrame(tick);
    // ibex.rotation.y += -0.01;
    renderer.render(scene, camera)
}

tick();