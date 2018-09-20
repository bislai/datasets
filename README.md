# Datasets

Conforme he ido desarrollando [Bislai](http://bislai.co) he ido generando más y más datos. 

## Tritura-mociones

Usando lodash y node para ir sacando las diferentes estadísticas que abastecen a Bislai.

## Mociones

Este dataset contiene todos las votaciones que han generado las mociones presentadas en el Ayuntamiento de Zaragoza.

Ejemplo:

```
{
    "fecha": "27-07-2015",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "PP + ZEC + PSOE + CHA",
    "abstencion": "C'S",
    "votos_favor": 25,
    "votos_abstencion": 4,
    "numero": 31
}
```

## Datos votaciones

Es la matriz de la páginas de estadísticas.

## Elecciones por distrito

Este dataset contiene los votos y el % por distrito electoral de Zaragoza desde 1987 hasta 2015.

```
"2015": {
    "partidos": {
        "cha": {
            "distritos": [{
                    "nombre": "Actur-Arrabal",
                    "votos": "5.382",
                    "porcentaje": "8.1%%"
                },
                {
                    "nombre": "Aljafería",
                    "votos": "948",
                    "porcentaje": "6.99%"
                },
                {
                    "nombre": "Barrios Zona Norte",
                    "votos": "915",
                    "porcentaje": "7.58%"
                },
                {
                    "nombre": "Barrios Zona Oeste",
                    "votos": "380",
                    "porcentaje": "5.99%"
                },
                {
                    "nombre": "Casco Viejo",
                    "votos": "933",
                    "porcentaje": "4.9%"
                },
                {
                    "nombre": "Centro",
                    "votos": "898",
                    "porcentaje": "3.08%"
                },
                {
                    "nombre": "Delicias",
                    "votos": "3408",
                    "porcentaje": "7.21%"
                },
                {
                    "nombre": "Las Fuentes",
                    "votos": "1510",
                    "porcentaje": "7.52%"
                },
                {
                    "nombre": "San José",
                    "votos": "2019",
                    "porcentaje": "6.66%"
                },
                {
                    "nombre": "Torrero",
                    "votos": "1236",
                    "porcentaje": "7.29%"
                },
                {
                    "nombre": "Universidad",
                    "votos": "3126",
                    "porcentaje": "6.67%"
                },
                {
                    "nombre": "Vía Hispanidad",
                    "votos": "1321",
                    "porcentaje": "7.50%"
                }
            ]
        }
    }
},
```


## Triturando

Una vez actualizada la matriz con todas las mociones procedemos a lanzar lodash contra la matriz. Para ello hay un script de NPM que primero actualiza los objetos de los partidos y una vez actualizado contabiliza los diferentes archivos correspondientes a cada partido.

```
npm run data:bislai
```


## Scraping

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
