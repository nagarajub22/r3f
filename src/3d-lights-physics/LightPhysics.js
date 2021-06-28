import { Physics } from "@react-three/cannon";
import { softShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CBox from "../common/Box";
import GizmoHelperComp from "../physics-collision-1/GizmoHelper";
import * as colors from 'nice-color-palettes';

softShadows({
    samples: 25,
    rings: 15
});

export function LightPhysics(props) {

    const colorsAry = colors[0];

    return (
        <>
            <Canvas shadows camera={{ position: [0, 10, 10] }}>
                <color attach="background" args={['#ffffff']} />
                <GizmoHelperComp />
                {/* <gridHelper /> */}
                <ambientLight intensity={0.4} />
                <directionalLight args={['#aaaaaa']} position={[10, 10, 10]} castShadow="true" />
                <Physics>
                    <CBox position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} size={[10, 10, 1]} mass={1} halfExtent={true} type={'Kinematic'} />
                    <CBox position={[Math.random(), Math.random() * 10, Math.random()]} rotation={[Math.random(), Math.random(), Math.random()]} size={[1, 1, 1]} mass={1} halfExtent={true} color={colorsAry[parseInt(Math.random() * 10, 2)]} />
                    <CBox position={[Math.random(), Math.random() * 10, Math.random()]} rotation={[Math.random(), Math.random(), Math.random()]} size={[1, 1, 1]} mass={1} halfExtent={true} color={colorsAry[parseInt(Math.random() * 10, 2)]} />
                    <CBox position={[Math.random(), Math.random() * 10, Math.random()]} rotation={[Math.random(), Math.random(), Math.random()]} size={[1, 1, 1]} mass={1} halfExtent={true} color={colorsAry[parseInt(Math.random() * 10, 2)]} />
                    <CBox position={[Math.random(), Math.random() * 10, Math.random()]} rotation={[Math.random(), Math.random(), Math.random()]} size={[1, 1, 1]} mass={1} halfExtent={true} color={colorsAry[parseInt(Math.random() * 10, 2)]} />
                    <CBox position={[Math.random(), Math.random() * 10, Math.random()]} rotation={[Math.random(), Math.random(), Math.random()]} size={[1, 1, 1]} mass={1} halfExtent={true} color={colorsAry[parseInt(Math.random() * 10, 2)]} />
                    <CBox position={[Math.random(), Math.random() * 10, Math.random()]} rotation={[Math.random(), Math.random(), Math.random()]} size={[1, 1, 1]} mass={1} halfExtent={true} color={colorsAry[parseInt(Math.random() * 10, 2)]} />
                    <CBox position={[Math.random(), Math.random() * 10, Math.random()]} rotation={[Math.random(), Math.random(), Math.random()]} size={[1, 1, 1]} mass={1} halfExtent={true} color={colorsAry[parseInt(Math.random() * 10, 2)]} />
                    <CBox position={[Math.random(), Math.random() * 10, Math.random()]} rotation={[Math.random(), Math.random(), Math.random()]} size={[1, 1, 1]} mass={1} halfExtent={true} color={colorsAry[parseInt(Math.random() * 10, 2)]} />
                    <CBox position={[Math.random(), Math.random() * 10, Math.random()]} rotation={[Math.random(), Math.random(), Math.random()]} size={[1, 1, 1]} mass={1} halfExtent={true} color={colorsAry[parseInt(Math.random() * 10, 2)]} />
                    <CBox position={[Math.random(), Math.random() * 10, Math.random()]} rotation={[Math.random(), Math.random(), Math.random()]} size={[1, 1, 1]} mass={1} halfExtent={true} color={colorsAry[parseInt(Math.random() * 10, 2)]} />
                    <CBox position={[Math.random(), Math.random() * 10, Math.random()]} rotation={[Math.random(), Math.random(), Math.random()]} size={[1, 1, 1]} mass={1} halfExtent={true} color={colorsAry[parseInt(Math.random() * 10, 2)]} />
                    <CBox position={[Math.random(), Math.random() * 10, Math.random()]} rotation={[Math.random(), Math.random(), Math.random()]} size={[1, 1, 1]} mass={1} halfExtent={true} color={colorsAry[parseInt(Math.random() * 10, 2)]} />
                    <CBox position={[Math.random(), Math.random() * 10, Math.random()]} rotation={[Math.random(), Math.random(), Math.random()]} size={[1, 1, 1]} mass={1} halfExtent={true} color={colorsAry[parseInt(Math.random() * 10, 2)]} />
                    <CBox position={[Math.random(), Math.random() * 10, Math.random()]} rotation={[Math.random(), Math.random(), Math.random()]} size={[1, 1, 1]} mass={1} halfExtent={true} color={colorsAry[parseInt(Math.random() * 10, 2)]} />

                </Physics>
            </Canvas>
        </>
    )
};