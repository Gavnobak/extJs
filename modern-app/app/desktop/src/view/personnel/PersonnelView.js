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
    platformConfig: {
        desktop: {
            plugins: {
                gridcellediting: true,
                treedragdrop: true
            }
        },

        '!desktop': {
            plugins: {
                grideditable: true
            }
        }
    },
    columns: [{
        text: 'Name',
        xtype: 'treecolumn',
        dataIndex: 'text',
        flex: 4,
        editable: true
    }, {
        text: 'Link',
        flex: 2,
        dataIndex: 'url',
        editable: true
    },
        {
            flex: 1,
            width: 100,
            align: 'center',
            renderer: function (value, rec, col, cell) {
                if (rec.get('url')) {
                    cell.setTools({
                        play: {
                            iconCls: 'x-fa fa fa-arrow-circle-right',
                            tooltip: 'go to link on click',
                            handler: function (grid, context) {
                                if (context.record.get('url')) window.open(context.record.get('url'), "new")
                            }
                        }
                    });
                } else return
            }
        }
    ],
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
                    disabled:true,
                    handler: 'addFolder'
                },
                {
                    text: 'Add file',
                    reference: 'fileButton',
                    disabled:true,
                    handler: 'addFile'
                },
                {
                    text: 'Add link',
                    reference: 'linkButton',
                    disabled:true,
                    handler: 'addLink'
                },
                {
                    text: 'Add property',
                    reference: 'propertyButton',
                    disabled:true,
                    handler: 'addProp'
                },
            ]
        },
        {
            xtype: 'grid',
            title: 'Node property',
            docked: 'right',
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

