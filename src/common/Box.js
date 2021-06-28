import { useBox } from "@react-three/cannon"

export default function CBox({position, rotation, size, ...props}) {

    const [ref] = useBox(() => ({
        position,
        rotation,
        args:props.halfExtent ? size : [],
        mass: props.mass || null,
        ...props 
    }));

    return (
        <mesh ref={ref} castShadow receiveShadow>
            <boxBufferGeometry attach="geometry" args={size} />
            <meshPhongMaterial attach="material" color={props.color ? props.color: '#e87d7d'} />
        </mesh>
    )
}