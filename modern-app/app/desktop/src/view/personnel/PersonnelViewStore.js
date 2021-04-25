// Ext.define('ModernApp.view.personnel.PersonnelViewStore', {
//     extend: 'Ext.data.Store',
//     alias: 'store.personnelviewstore',
//     fields: [
//         'name', 'email', 'phone', 'dept'
//     ],
//     groupField: 'dept',
//     data: { items: [
//         { name: 'Jean Luc',   email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", dept: "bridge" },
//         { name: 'ModernWorf', email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", dept: "engine" },
//         { name: 'Deanna',     email: "deanna.troi@enterprise.com",    phone: "555-333-3333", dept: "bridge" },
//         { name: 'Data',       email: "mr.data@enterprise.com",        phone: "555-444-4444", dept: "bridge" }
//     ]},
//     proxy: {
//         type: 'memory',
//         reader: {
//             type: 'json',
//             rootProperty: 'items'
//         }
//     }
// });

Ext.define('ModernApp.view.personnel.PersonnelViewStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.personnelviewstore',
    root: {
        text: 'Genre',
        expanded: true,
        property: [],
        children: [
            {
                text: 'Comedy',
                iconCls: 'x-fa fa-database',
                property: [],
                children: [
                    {
                        leaf: true,
                        text: '30 Rock',
                        property:
                            [
                                {
                                    name: 'Jean Luc',
                                    value: "bridge"
                                },
                                {
                                    name: 'ModernWorf',
                                    value: "engine"
                                },
                            ]
                    },
                    {leaf: true, property: [],text: 'Arrested Development'},
                    {leaf: true,property: [], text: 'Bob\'s Burgers'},
                    {leaf: true,property: [],text: 'Curb your Enthusiasm'},
                    {leaf: true, property: [],text: 'Futurama'}
                ]
            },
            {
                text: 'Drama',
                property: [],
                children: [
                    {leaf: true,property: [], text: 'Breaking Bad',},
                    {leaf: true,property: [], text: 'Game of Thrones'},
                    {leaf: true,property: [], text: 'Lost'},
                    {leaf: true,property: [], text: 'Preacher'},
                    {leaf: true,property: [], text: 'The Wire'}
                ]
            },
            {
                text: 'Science Fiction',
                property: [],
                children: [
                    {leaf: true,property: [], text: 'Black Mirror'},
                    {leaf: true,property: [], text: 'Doctor Who'},
                    {leaf: true,property: [], text: 'Eureka'},
                    {leaf: true, property: [],text: 'Futurama'},
                    {leaf: true,property: [], text: 'The Twilight Zone'},
                    {leaf: true,property: [], text: 'X-Files'}
                ]
            }
        ]
    }
});