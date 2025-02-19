# raccogli express in una const (app) e ascoltalo in una porta

# "prendi" un url per creare una route home e mandagli una risposta

# in un altro file fai lo stesso ma per una route secondaria (nome della qual andrò a specificare dove la importo). (al posto di raccogliere express raccolgo express.Router() )

# nel file principale import e USA la nuova route

# sempre nel file secondario gestisco il push in post di un user (in index USA il method json di express())

``` js - users boilerplate
let users = [
    {
        "nome": "Giulio",
        "squadra": "rossa"
    },
    {
        "nome": "Cesare",
        "squadra": "blu"
    },
    {
        "nome": "Caio",
        "squadra": "nera"
    },
]