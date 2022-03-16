const precioOriginal = 120;
const descuento = 18;

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];



function porcentajePrecioConDescuento (precio, descuento) {
    const porcentajePrecioDescuento = 100 - descuento;
    const precioDescuento = (precio * porcentajePrecioDescuento) / 100;
    return precioDescuento;
}

function savePriceDisacount () {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    // const inputDisacount = document.getElementById("inputDiscount");
    // const disacountValue = inputDisacount.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    // const precioConDescuento = porcentajePrecioConDescuento (priceValue, disacountValue);

    // const resultP = document.getElementById("resultPriceDisacount");
    // resultP.innerText = "El precio con descuento son: $" + precioConDescuento;


    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + userCouponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = porcentajePrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("resultPriceDisacount");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}