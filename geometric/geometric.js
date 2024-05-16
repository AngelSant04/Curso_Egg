import calcularPerimetro from "./perimeter.js";
import { calcularArea } from "./area.js";
import arrCuadrado from "./rectangleData.js";

const objMain = document.getElementById("main")

objMain.innerHTML = `
<table>
    <tr>
        <th>Cuadrado</th>
        <th>Area</th>
        <th>Perimetro</th>
    </tr>
    ${
        arrCuadrado.map((cuadrado) => `
            <tr>
                <td>${cuadrado.name}</td>
                <td>${calcularArea(cuadrado.ancho, cuadrado.altura)}</td>
                <td>${calcularPerimetro(cuadrado.ancho, cuadrado.altura)}</td>
            </tr>
        `).join('')
    }
</table>
`
