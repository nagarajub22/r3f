import { useRef } from "react";

function Plane(props) {
    const ref = useRef();

    return(
        <mesh
            ref={ref}
            {...props}
            receiveShadow
        >
            <planeBufferGeometry attach="geometry" args={[10,10]}/>
            <shadowMaterial attach="material" color={'#171717'}/>
        </mesh>
    )
}

export default Plane;