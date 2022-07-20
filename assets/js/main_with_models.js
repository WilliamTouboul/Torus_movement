/* ----------------------------- Creation Scene ----------------------------- */
const scene = new THREE.Scene();

/* ----------------------------- Creation Camera ---------------------------- */
const fov = 45;
// Variable pour changer le ratio plus facilement
const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(fov, aspectRatio);
//TOUJOURS ajouter ce qu'on créé a la scene.
camera.position.z = 3;
camera.position.x = -1

// // tete
// camera.position.x = -0.5
// camera.position.y = 0.5
// camera.position.z = 1.2

// // patte
// camera.position.x = -0.65
// camera.position.y = -0.5
// camera.position.z = 1.7

// // patte
// camera.position.x = -0.65
// camera.position.y = -0.75
// camera.position.z = 1.2


scene.add(camera)


var gltfLoader = new THREE.GLTFLoader();
var global_ibex;

var mymodel = gltfLoader.load('assets/3d_models/ibex/scene.gltf', function (gltf) {
    ibex = gltf.scene;
    global_ibex = ibex;
    scene.add(ibex)
});

/* ---------------------------- Création Renderer --------------------------- */
const renderer = new THREE.WebGLRenderer({
    alpha: 'true'
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);

const color = 0xa0ff61;
const intensity = 2;
const light = new THREE.DirectionalLight(color, intensity);
light.target.position.set(-4, 2, 1.6);
scene.add(light);
scene.add(light.target);

const color2 = 0x9cc77f;
const intensity2 = 2;
const light2 = new THREE.DirectionalLight(color2, intensity2);
light2.target.position.set(4.7, -0.5, 1.5);
scene.add(light2);
scene.add(light2.target);

renderer.gammaOutput = true

document.querySelector('.button_1').addEventListener("click", function () {
    var tl = gsap.timeline();
    tl.to(ibex.rotation, {
        y: 0.25,
        duration: 1
    });
    tl.to(camera.position, {
        x: -0.5,
        y: 0.5,
        z: 1.2,
        duration: 3.5, // Durée
        ease: Power4.easeOut // Easing
    });
});


document.querySelector('.button_2').addEventListener("click", function () {
    var tl = gsap.timeline();
    tl.to(ibex.rotation, {
        y: -0.25,
        duration: 1
    })
    tl.to(camera.position, {
        x: -0.65,
        y: -0.5,
        z: 1.7,
        duration: 3.5, // Durée
        ease: Power4.easeOut // Easing
    });
});

document.querySelector('.button_3').addEventListener("click", function () {
    var tl = gsap.timeline();
    tl.to(ibex.rotation, {
        y: -1,
        duration: 1
    })
    tl.to(camera.position, {
        x: -0.65,
        y: -0.75,
        z: 1.2,
        duration: 3.5, // Durée
        ease: Power4.easeOut // Easing
    });
});


const tick = () => {
    requestAnimationFrame(tick);
    // ibex.rotation.y += -0.01;
    renderer.gammaOutput = true
    renderer.render(scene, camera)
}

tick();