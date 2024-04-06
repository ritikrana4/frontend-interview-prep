import { StrictMode  } from "react";
import {createRoot} from 'react-dom/client'
import { App } from "./App";

const root = document.getElementById("root");
const reactElement = createRoot(root);

reactElement.render(
    <StrictMode>
        <App/> 
    </StrictMode>
)