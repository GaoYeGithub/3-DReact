import React from "react"
import ReactDOM from "react-dom"

function Page() {
    return (
        <a-scene>
            <a-entity id="camera" camera position="0 1.6 4" look-controls wasd-controls></a-entity>
            <a-light type="ambient" color="#888"></a-light>
            <a-light type="directional" intensity="1" position="0 4 -1"></a-light>

            <a-text value="Welcome To a React 3-D" align="center" position="0 3 -4" width="6" color="#000000"></a-text>

            <a-cylinder position="0 0.75 -3" radius="0.5" height="1.5" color="#C2B280"></a-cylinder>
            <a-sphere position="0 1.5 -3" radius="0.4" color="#FFFFFF"></a-sphere>
            <a-cylinder position="0 1.8 -3" radius="0.05" height="0.5" color="#FF0000" rotation="90 0 0"></a-cylinder>

            <a-plane rotation="-90 0 0" width="10" height="10" color="#7BC8A4"></a-plane>
        </a-scene>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))