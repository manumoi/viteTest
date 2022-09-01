const organizationDataRows = [
    { _id: "o1", name: "Musée d'Art Contemporain des Laurentides", code: "MACLAU", access: "maclau", presentation: "ce musée est situé à saint jérome" },
    { _id: "o2", name: "Musée d'Art Contemporain des Laurentides", code: "IDU", access: "idu", presentation: "ce musée est situé à saint jérome" },
]

const contentDataRows = [
    {
        _id: "c1", orgaId: "o1", name: 'Rallye Famille FR', presentation: "blablabla, ",
        longitude: 0.0,
        latitude: 0.0,
        code: "bla ble bli",
        variants: [
            { _id: "v1", name: 'Titre de la v1', description: "description de la v1", url: "url de la v1", imgUrl: "imgUrl de la v1" },
            { _id: "v2", name: 'Titre de la v2', description: "description de la v2", url: "url de la v2", imgUrl: "imgUrl de la v2" },
            { _id: "v3", name: 'Titre de la v3', description: "description de la v3", url: "url de la v3", imgUrl: "imgUrl de la v3" },
        ],
    },
]







export { organizationDataRows, contentDataRows }