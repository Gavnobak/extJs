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
                    {leaf: true, property: [],text: 'Arrested Development',iconCls: 'x-fa fa fa-link', url:'https://google.com'},
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