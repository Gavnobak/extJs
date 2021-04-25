Ext.define('ModernApp.view.personnel.PersonnelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personnelviewcontroller',

    onSelectionChange: function(selectable, records, selecting, selection) {
        var buttonFol = this.lookup('folderButton'),
            buttonFil = this.lookup('fileButton'),
            buttonLin = this.lookup('linkButton'),
            buttonPro = this.lookup('propertyButton'),
            vm = this.getView().getViewModel(),
            selectedNode;


        if (selection.getCount()) {
            selectedNode = records[0];
            buttonPro.enable()
            vm.set('selectedRow', selectedNode.data.property)
            if (selectedNode.data.leaf){
                buttonFol.disable()
                buttonFil.disable()
                buttonLin.disable()
            } else{
                buttonFol.enable()
                buttonFil.enable()
                buttonLin.enable()
            }
        }else {
            buttonFol.disable()
            buttonFil.disable()
            buttonLin.disable()
            buttonPro.disable()
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
    addLink: function() {
        var tree = this.getView(),
            store = tree.getStore(),
            target = tree.getSelections()[0] || store.getRoot(),
            inputField = this.lookup('folderName'),
            value = inputField.getValue(),
            node;

        if (value) {
            node = {
                text: "link",
                leaf: true,
                property: [],
                iconCls: 'x-fa fa fa-link',
                url:value
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
            // grid.getStore().sync()
        }
    },
});
