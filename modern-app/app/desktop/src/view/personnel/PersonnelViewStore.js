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
        children: [
            {
                text: 'Comedy',
                iconCls: 'x-fa fa-database',
                children: [
                    { leaf: true, text: '30 Rock' },
                    { leaf: true, text: 'Arrested Development' },
                    { leaf: true, text: 'Bob\'s Burgers' },
                    { leaf: true, text: 'Curb your Enthusiasm' },
                    { leaf: true, text: 'Futurama' }
                ]
            },
            {
                text: 'Drama',
                children: [
                    { leaf: true, text: 'Breaking Bad', },
                    { leaf: true, text: 'Game of Thrones' },
                    { leaf: true, text: 'Lost' },
                    { leaf: true, text: 'Preacher' },
                    { leaf: true, text: 'The Wire' }
                ]
            },
            {
                text: 'Science Fiction',
                children: [
                    { leaf: true, text: 'Black Mirror' },
                    { leaf: true, text: 'Doctor Who' },
                    { leaf: true, text: 'Eureka' },
                    { leaf: true, text: 'Futurama' },
                    { leaf: true, text: 'The Twilight Zone' },
                    { leaf: true, text: 'X-Files' }
                ]
            }
        ]
    }
});