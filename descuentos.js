const precioOriginal = 120;
const descuento = 18;

function porcentajePrecioConDescuento (precio, descuento) {
    const porcentajePrecioDescuento = 100 - descuento;
    const precioDescuento = (precio * porcentajePrecioDescuento) / 100;
    return precioDescuento;
}

function savePriceDisacount () {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDisacount = document.getElementById("inputDiscount");
    const disacountValue = inputDisacount.value;

    const precioConDescuento = porcentajePrecioConDescuento (priceValue, disacountValue);

    const resultP = document.getElementById("resultPriceDisacount");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}