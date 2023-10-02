const globalschema = {
    name: 'global_info',
    title: 'Global Informaton',
    type: 'document',
    fields: [
        {
            name: 'fullname',
            title: 'Fullname',
            type: 'string'
        },
        {
            name: 'brief_description',
            title: 'Brief Description',
            type: 'string'
        },
    ]
}

export default globalschema;