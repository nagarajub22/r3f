import { Physics } from "@react-three/cannon";
import { softShadows, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper, PointLightHelper } from "three";
import GizmoHelperComp from "./GizmoHelper";
import Ground from "./Ground";
import Sphere from "./Sphere";

softShadows();

export default function App() {

    const ref = useRef();

    useHelper(ref, PointLightHelper, 0.5, 'pink')

    return (
        <>
            <color attach="background" args={['#99ffaa']} />
            <GizmoHelperComp />
            {/* <gridHelper /> */}
            <ambientLight intensity={0.1}/>
            <pointLight ref={ref} position={[10, 5, 12]} intensity={2} color={'lightblue'} castShadow />
            {/* <Plane rotation={[-Math.PI / 2, 0, 0]} /> */}
            {/* <Cube position={[0, 0.5, 0]} /> */}
            <Physics>
                <Sphere position={[0, 10, 0]} key={1} />
                <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={2} />
                <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={3} />
                <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={2} />
                <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={3} />
                <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={2} />
                <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={3} />
                <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={2} />
                <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={3} />
                <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={2} />
                <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={3} />
                <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={2} />
                <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={3} />
                <Ground />
            </Physics>

        </>
    );
}