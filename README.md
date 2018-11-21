# Datasets

Este repositorio contiene todos los datasets que utilizo para generar todas las estadísticas que abastecen a [Bislai](https://bislai.co)

## Datos


### Node + Lodash

Comprobar que la matriz que contiene todas las mociones esta actualizada en ```mociones/mociones.json``` Lanzamos lodash contra la matriz. Para ello hay un script de NPM que primero actualiza los objetos de los partidos y una vez actualizado contabiliza los diferentes archivos correspondientes a cada partido.

```
npm run data:bislai
```

Después de lanzar el script obtenemos para cada partido:

- Votos a favor del resto de partidos
- Votos en contra del resto de partidos
- Abstenciones
- Votos en su contra del resto de partidos
- Votos a favor del resto de partidos

Para las estadísticas generales obtenemos:

- ¿Quién vota a favor?
- ¿Quién vota en contra?
- ¿Quién se abstiene?
- Cuantás mociones se han presentado
- Resultado de las **votaciones**, no son mociones.
- Votaciones por unanimidad
- La soledad del pleno, aquellos partidos que votan solos ya se a favor, en contra o abstención.


### Filtrando con jq

Queremos sacar por fecha los votos a favor(también en contra y abstención) que ha hecho cada partido a lo largo de la lesgislatura 2015-2019. Para ello necesitamos que la matriz con todas las mociones este actualizada.

Lo primero que hacemos es crear un JSON con los campos afavor, presentada y fecha.

```
jq --raw-output ['.[] | {"afavor": .a_favor, "presentada": .presentada, "fecha": .fecha}'] mociones.json > a-favor-chunta.json
```

Esto nos devuelve algunos resultados con null, estos resultados son aquellos de las mociones que se han votado por unanimidad. Así que ahora vamos a limpiarlos

```
jq --raw-output ['.[] | select(.afavor!=null) | select(.afavor | contains("CHA"))'] a-favor-chunta.json > limpiando-chunta.json
```

Ahora vamos a eliminar las mociones que ha presentado CHA y obviamente se ha votado a sí misma.

```
jq --raw-output ['.[]  | select(.presentada | contains("CHA") | not) '] limpiando-chunta.json >> sin-chunta.json
```

Y ahora que ya tenemos todo limpio no nos hace falta el campo de afavor, así que lo eliminamos

```
jq --raw-output ['.[] | {"presentada": .presentada, "fecha": .fecha}'] sin-chunta.json > legislatura-chunta-votos-a-favor.json
```

Por último transformamos el JSON a CSV

```
json2csv -i legislatura-chunta-votos-a-favor.json -o legislatura-chunta-votos-a-favor.csv
```


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

