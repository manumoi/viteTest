const organizationDataRows = [
    { id: 0, name: "Musée d'Art Contemporain des Laurentides", code: "MACLAU", presentation: "ce musée est situé à saint jérome", edit: true, delete: true },

]  

const organizationColumnDescriptions = [
    {
        field: 'name',
        headerName:'Name',
        width:500
    },
    {
        field: 'code',
        headerName: 'Code',
        width: 90,
    },
    {
        field: 'presentation',
        headerName: 'Presentation',
        width: 500,
    },
    {
        field: 'edit',
        headerName: 'Edit',
        width: 90,
    },
    {
        field: 'delete',
        headerName: 'Delete',
        width: 90,
        valueGetter: (params) =>
            <button>Delete</button>
    },
];


export {organizationDataRows, organizationColumnDescriptions}