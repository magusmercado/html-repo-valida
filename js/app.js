import { valida } from "./validaciones";

const inputs = document.querySelector("input");

inputs.forEach( input =>{
    input.addEventListener("blur", (input)=>{
        valida(input.target);
    });
});