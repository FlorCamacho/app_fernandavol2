// resources/js/Codea.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'

export default function Codea(){
    return(
        <div>ESTAMOS EN CODEA.APP React JS 18 en Laravel 10 con Vite JS</div>
    );
}

if(document.getElementById('codeareact')){
    createRoot(document.getElementById('codeareact')).render(<Codea/>)
}