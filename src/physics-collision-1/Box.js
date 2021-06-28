import { useRef } from "react";

function Cube(props) {
    const ref = useRef();

    return (
        <mesh
            ref={ref}
            {...props}
            receiveShadow
            castShadow
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>
    )
}

export default Cube;
