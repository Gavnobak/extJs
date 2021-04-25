Ext.define('ModernApp.view.personnel.PersonnelView', {
    extend: 'Ext.grid.Tree',
    xtype: 'personnelview',
    cls: 'personnelview',
    requires: [
        'Ext.grid.rowedit.Plugin',
        'Ext.grid.Tree',
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.plugin.TreeDragDrop'
    ],
    controller: {type: 'personnelviewcontroller'},
    viewModel: {type: 'personnelviewmodel'},
    store: {type: 'personnelviewstore'},
    plugins: {
        treedragdrop: true
    },
    items: [
        {
            xtype: 'toolbar',
            docked: 'bottom',
            reference: 'tbar',
            items: [
                {
                    xtype: 'textfield',
                    reference: 'folderName',
                },
                {
                    text: 'Add folder',
                    reference: 'folderButton',
                    handler: 'addFolder'
                },
                {
                    text: 'Add file',
                    reference: 'fileButton',
                    handler: 'addFile'
                },

                {
                    text: 'Add property',
                    reference: 'propertyButton',
                    handler: 'addProp'
                },
            ]
        },
        {
            xtype: 'grid',
            title: 'Node property',
            docked: 'right',
            //store: store,
            reference: 'propGrid',
            bind: {
                store: '{selectedRow}'
            },
            plugins: {
                gridcellediting: {
                    selectOnEdit: true
                }
            },
            columns: [
                {text: 'Property', dataIndex: 'name', width: 200},
                {
                    text: 'Value', dataIndex: 'value', width: 250,
                    editable: true
                },
            ],

            height: 200,
            layout: 'fit',
        }
    ],

    listeners: {
        selectionchange: 'onSelectionChange'
    },
});

