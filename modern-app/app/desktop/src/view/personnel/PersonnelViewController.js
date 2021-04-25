Ext.define('ModernApp.view.personnel.PersonnelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personnelviewcontroller',

    onSelectionChange: function(selectable, records, selecting, selection) {
        var button = this.lookup('folderButton'),
            vm = this.getView().getViewModel(),
            selectedNode;


        if (selection.getCount()) {
            selectedNode = records[0];
            vm.set('selectedRow', selectedNode.data.property)
           // console.log(vm.get('selectedRow'))
            if (selectedNode.data.leaf){
                button.disable()
            } else{
                button.enable()
            }
        }
    },
    addFolder: function() {
        var tree = this.getView(),
            store = tree.getStore(),
            target = tree.getSelections()[0] || store.getRoot(),
            inputField = this.lookup('folderName'),
            value = inputField.getValue(),
            node;

        if (value) {

            node = {
                text: value,
                children: [],
                property: [],
            };

            target.appendChild(node);

            inputField.reset();
        }
    },
    addFile: function() {
        var tree = this.getView(),
            store = tree.getStore(),
            target = tree.getSelections()[0] || store.getRoot(),
            inputField = this.lookup('folderName'),
            value = inputField.getValue(),
            node;

        if (value) {
          node = {
                text: value,
                leaf: true,
                property: [],
            };

            target.appendChild(node);

            inputField.reset();
        }
    },
    addProp: function() {
        var tree = this.getView(),
            vm = tree.getViewModel(),
            row = vm.get('selectedRow'),
            inputField = this.lookup('folderName'),
            grid = this.lookup('propGrid'),
            value = inputField.getValue();

        if (value) {
            newProp = {
                name: value,
                value: '',
            };
            // костыль
            row.push(newProp)
            grid.getStore().add(newProp)
        }
    }
});
