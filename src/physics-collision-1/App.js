import { Debug, Physics } from "@react-three/cannon";
import { softShadows, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { PointLightHelper } from "three";
import GizmoHelperComp from "./GizmoHelper";
import Ground from "./Ground";
import Sphere from "./Sphere";

softShadows();

export default function App() {

    const ref = useRef();

    useHelper(ref, PointLightHelper, 0.5, 'black')

    return (
        <>
            <color attach="background" args={['white']} />
            <GizmoHelperComp />
            <gridHelper />
            <ambientLight intensity={0.1} />
            <pointLight ref={ref} position={[10, 5, 12]} color={'lightgray'} castShadow />
            {/* <Plane rotation={[-Math.PI / 2, 0, 0]} /> */}
            {/* <Cube position={[0, 0.5, 0]} /> */}
            <Physics>
                <Debug color="black" scale={1.2}>
                    <Sphere position={[0, Math.random() * 100, 0]} key={1} />
                    <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={2} />
                    <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={3} />
                    <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={4} />
                    <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={5} />
                    <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={6} />
                    <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={7} />
                    <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={8} />
                    <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={9} />
                    <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={10} />
                    <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={11} />
                    <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={12} />
                    <Sphere position={[Math.random(), Math.random() * 100, Math.random()]} key={13} />
                    <Ground />
                </Debug>
            </Physics>

        </>
    );
}