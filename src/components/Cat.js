import React, { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Mesh, AnimationMixer } from 'three'

{/* "cat Rigged" (https://skfb.ly/6VG9n) by Vr-cvantorium is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/). */}

export function Cat() {

    const gltf = useLoader(
        GLTFLoader,
        `${process.env.PUBLIC_URL}/models/cat_rigged/scene.gltf`
    )
    console.log('sdf', gltf);

    useEffect(() => {
        gltf.scene.scale.set(0.1, 0.1, 0.1);
        gltf.scene.position.set(-1, -1, -3.5); // set Cat on the 3d canvas, forwardbackward / updown / leftright

        // There are sub-components in the drawing, eg. legs, head...
        // gltf.scene.traverse((object) => {
        //     if (object instanceof Mesh) {
        //         object.castShadow = true;
        //         object.receiveShadow = true;
        //         object.material.envMapIntensity = 20;
        //     }
        // });

        // https://discoverthreejs.com/book/first-steps/animation-system/
        // Animations, not working
        const model = gltf.scene.children[0];
        const mixer = new AnimationMixer(model);
        const action = mixer.clipAction(gltf.animations[0]);
        model.tick = (delta) => mixer.update(delta);
        action.play();

    }, [gltf]);

  return <primitive object={gltf.scene} />;
}