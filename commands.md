# Scraping

Scrapeando el HTML que contiene las mociones y los links de las mociones con PUP

La estructura HTML deja mucho que desear. No contiene clases ni identificadores lo cual genera un trabajo extra para scrapear, y un resultado pésimo a nivel visual para el usuario.

Lo primero es extraer las votaciones que están en acuerdos, y lo segundo es extraer los enlaces de las mociones completas que están en el orden del día.

Extrayendo el contenido y votaciones de las mociones.
```
curl -s https://www.zaragoza.es/sede/portal/organizacion/plenos/servicio/fehaciente/68342 | pup 'div#rscont > ul li' > $nombre.html
```

Extrayendo el contenido en formato JSON

```
cat $nombre.html | pup 'li json{}'
```

Extrayendo los enlaces que contienen las mociones completas. 

```
curl -s https://www.zaragoza.es/sede/portal/organizacion/plenos/servicio/fehaciente/68085 | pup 'div#rscont > ul li' > prueba.html
```
