import { useBox } from "@react-three/cannon";

export default function Ground(props) {
    const [ref] = useBox(() => ({
        mass: 1000,
        type: 'Kinematic',
        args: [10, 10, 1],
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 0.5, 0],
        ...props
    }));

    return (
        <>
            <mesh ref={ref} receiveShadow>
                <boxBufferGeometry attach="geometry" args={[10, 10]} />
                <meshPhongMaterial attach="material" color={'#0f2f00'}/>
            </mesh>
        </>
    )
}