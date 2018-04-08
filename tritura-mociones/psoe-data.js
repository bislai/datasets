var fs = require("fs");
var _ = require("lodash");

//Cargamos el total de todas las votaciones
data = JSON.parse(fs.readFileSync('psoe/psoe-total.json','utf8'));

//Obtenemos las votaciones donde el PP ha votado a favor y luego las filtramos por que partido la ha presentado
psoeFavor = _.filter(mociones, function(res) { if (/PSOE/.test(res.a_favor)) return res.fecha });
psoeFavor = _.countBy(psoeFavor, function(res) { return (res.presentada) })

fs.writeFile('psoe/psoe-favor.json', JSON.stringify(psoeFavor, null, 2), function(err) {
    if (err) {
        throw err;
    }
});


//Obtenemos las votaciones donde el psoe ha votado en contra y luego las filtramos por que partido la ha presentado
psoeContra = _.filter(mociones, function(res) { if (/PSOE/.test(res.en_contra)) return res.fecha });
psoeContra = _.countBy(psoeContra, function(res) { return (res.presentada) })

fs.writeFile('psoe/psoe-contra.json', JSON.stringify(psoeContra, null, 2), function(err) {
    if (err) {
        throw err;
    }
});


//Obtenemos las votaciones donde el psoe se ha abstenido y luego las filtramos por que partido la ha presentado
psoeAbstencion = _.filter(mociones, function(res) { if (/PSOE/.test(res.abstencion)) return res.fecha });
psoeAbstencion = _.countBy(psoeAbstencion, function(res) { return (res.presentada) })

fs.writeFile('psoe/psoe-abstencion.json', JSON.stringify(psoeAbstencion, null, 2), function(err) {
    if (err) {
        throw err;
    }
});
