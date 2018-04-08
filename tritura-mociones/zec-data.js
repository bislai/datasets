var fs = require("fs");
var _ = require("lodash");

//Cargamos el total de todas las votaciones
data = JSON.parse(fs.readFileSync('zec/zec-total.json','utf8'));

//Obtenemos las votaciones donde ZEC ha votado a favor y luego las filtramos por que partido la ha presentado
zecFavor = _.filter(data, function(res) { if (/ZEC/.test(res.a_favor)) return res.fecha });
zecFavor = _.countBy(zecFavor, function(res) { return (res.presentada) })

fs.writeFile('zec/zec-favor.json', JSON.stringify(zecFavor, null, 2), function(err) {
    if (err) {
        throw err;
    }
});


//Obtenemos las votaciones donde ZEC ha votado en contra y luego las filtramos por que partido la ha presentado
zecContra = _.filter(data, function(res) { if (/ZEC/.test(res.en_contra)) return res.fecha });
zecContra = _.countBy(zecContra, function(res) { return (res.presentada) })

fs.writeFile('zec/zec-contra.json', JSON.stringify(zecContra, null, 2), function(err) {
    if (err) {
        throw err;
    }
});


//Obtenemos las votaciones donde ZEC se ha abstenido y luego las filtramos por que partido la ha presentado
zecAbstencion = _.filter(data, function(res) { if (/ZEC/.test(res.abstencion)) return res.fecha });
zecAbstencion = _.countBy(zecAbstencion, function(res) { return (res.presentada) })

fs.writeFile('zec/zec-abstencion.json', JSON.stringify(zecAbstencion, null, 2), function(err) {
    if (err) {
        throw err;
    }
});
