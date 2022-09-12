var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3) {
        counter = 1;
    }
}, 5000);

document.getElementById("year").innerHTML = new Date().getFullYear();

function buy(product_name, product_price) {
    const message = `Halo, saya mau beli ${product_name} - ${product_price}`
    const whatsapp = `https://wa.me/6287784293280?text=${message}`
    open(whatsapp, "_blank")
}

function chat(product) {
    const message = `Halo, saya ingin bertanya ${product}`
    const whatsapp = `https://wa.me/6287784293280?text=${message}`
    open(whatsapp, "_blank")
}