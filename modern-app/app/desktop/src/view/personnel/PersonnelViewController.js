Ext.define('ModernApp.view.personnel.PersonnelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personnelviewcontroller',

    onSelectionChange: function (selectable, records, selecting, selection) {
        const vm = this.getView().getViewModel();
        if (selection.getCount() === 1) {
            const selectedNode = records[0];
            vm.set('selectedNode', selectedNode.data)
            vm.set('selectedRow', selectedNode.data.property)
        } else {
            vm.set('selectedNode', null)
            vm.set('selectedRow', [])
        }
    },

    add: function (button) {
        const tree = this.getView(),
            store = tree.getStore(),
            target = tree.getSelections()[0] || store.getRoot(),
            inputField = this.lookup('folderName'),
            value = inputField.getValue();
        let node = {
            text: value,
            property: [],
        };

        if (value) {
            switch (button.reference) {
                case 'folderButton':
                    node.children = [];
                    break;
                case 'fileButton':
                    node.leaf = true;
                    break;
                case 'linkButton':
                    node.text = "link";
                    node.leaf = true;
                    node.iconCls = 'x-fa fa fa-link';
                    node.url = value;
                    break;
                case 'propertyButton':
                    const row = tree.getViewModel().get('selectedRow'),
                        grid = this.lookup('propGrid'),
                        newProp = {
                            name: value,
                            value: '',
                        };
                    // костыль
                    row.push(newProp)
                    grid.getStore().add(newProp)
                    // grid.getStore().sync()
                    break;
                default:
                    alert("нет такой кнопки");
            }
            if (button.reference !== 'propertyButton') {
                target.appendChild(node);
            }
            inputField.reset();
        }
    },

});
