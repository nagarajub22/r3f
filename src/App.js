import { useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { PointLightHelper } from "three";
import Cube from "./Box";
import GizmoHelperComp from "./GizmoHelper";
import Plane from "./Plane";

export default function App() {

    const ref = useRef();

    useHelper(ref, PointLightHelper, 0.5, 'pink')

    return (
        <>
            <color attach="background" args={['lightblue']} />
            <GizmoHelperComp />
            <gridHelper />
            <pointLight ref={ref} position={[5, 5, 2]} angle={0.3} penumbra={1} intensity={2} castShadow />
            <Plane rotation={[-Math.PI / 2, 0, 0]} />
            <Cube position={[0, 0.510, 0]} />
        </>
    );
}