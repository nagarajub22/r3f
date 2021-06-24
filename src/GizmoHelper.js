import { GizmoHelper, GizmoViewport, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function GizmoHelperComp(props) {
    const controlRef = useRef();

    return (
        <>
            <GizmoHelper
                alignment="bottom-right" // widget alignment within scene
                margin={[80, 80]} // widget margins (X, Y)
                onTarget={() => controlRef?.current?.target}
                onUpdate={() => controlRef.current?.update()}
            >
                <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
            </GizmoHelper>
            <OrbitControls ref={controlRef} />
        </>
    )
}

export default GizmoHelperComp;