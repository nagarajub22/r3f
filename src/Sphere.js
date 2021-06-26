import { useSphere } from "@react-three/cannon";

export default function Sphere(props) {
    const [ref] = useSphere(() => ({ mass: 0.5, args: 0.5, ...props }));

    return (
        <mesh
            ref={ref}
            castShadow
            receiveShadow
        >
            <sphereBufferGeometry attach="geometry" args={[0.5, 100, 100]}/>
            <meshPhongMaterial attach="material" color={'orange'}/>
        </mesh>
    )
}