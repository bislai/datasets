# Datasets

Conforme he ido desarrollando [Bislai](http://bislai.co) he ido generando más y más datos. 

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
``
