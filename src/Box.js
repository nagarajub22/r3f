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
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>
    )
}

export default Cube;
