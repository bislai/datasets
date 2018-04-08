var fs = require("fs");
var _ = require("lodash");

data = JSON.parse(fs.readFileSync('cs/cs-total.json','utf8'));

//Obtenemos las votaciones donde el PP ha votado a favor y luego las filtramos por que partido la ha presentado
csFavor = _.filter(mociones, function(res) { if (/C'S/.test(res.a_favor)) return res.fecha });
csFavor = _.countBy(csFavor, function(res) { return (res.presentada) })

fs.writeFile('cs/cs-favor.json', JSON.stringify(csFavor, null, 2), function(err) {
    if (err) {
        throw err;
    }
});


//Obtenemos las votaciones donde el cs ha votado en contra y luego las filtramos por que partido la ha presentado
csContra = _.filter(mociones, function(res) { if (/C'S/.test(res.en_contra)) return res.fecha });
csContra = _.countBy(csContra, function(res) { return (res.presentada) })

fs.writeFile('cs/cs-contra.json', JSON.stringify(csContra, null, 2), function(err) {
    if (err) {
        throw err;
    }
});


//Obtenemos las votaciones donde el cs se ha abstenido y luego las filtramos por que partido la ha presentado
csAbstencion = _.filter(mociones, function(res) { if (/C'S/.test(res.abstencion)) return res.fecha });
csAbstencion = _.countBy(csAbstencion, function(res) { return (res.presentada) })

fs.writeFile('cs/cs-abstencion.json', JSON.stringify(csAbstencion, null, 2), function(err) {
    if (err) {
        throw err;
    }
});
