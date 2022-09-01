const organizationDataRows = [
    { id: "o1", name: "Musée d'Art Contemporain des Laurentides", code: "MACLAU", access: "maclau", presentation: "ce musée est situé à saint jérome" },
    { id: "o2", name: "Musée IDU Interactive", code: "IDU", access: "idu", presentation: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
]

const contentDataRows = [
    {
        _id: "c1", orgaId: "o1", name: 'Rallye Famille FR', presentation: "blablabla, ",
        longitude: 0.0,
        latitude: 0.0,
        code: "bla ble bli",
        variants: [
            { id: "v1", name: 'Titre de la v1', description: "description de la v1", url: "url de la v1", imgUrl: "imgUrl de la v1" },
            { id: "v2", name: 'Titre de la v2', description: "description de la v2", url: "url de la v2", imgUrl: "imgUrl de la v2" },
            { id: "v3", name: 'Titre de la v3', description: "description de la v3", url: "url de la v3", imgUrl: "imgUrl de la v3" },
        ],
    },
]







export { organizationDataRows, contentDataRows }