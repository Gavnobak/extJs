Ext.define('ModernApp.view.personnel.PersonnelViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.personnelviewmodel',
	data: {
		name: 'ModernApp',
		selectedRow: [],
	},
	// stores:{
	// 	propertyStore:{
	// 		type:'store'
	// 	}
	// },
	// formulas: {
	// 	setPropertyGridStore:{
	// 		'bind': {
	// 			bindTo: '{selectedRow}'
	// 		},
	// 		'get': function (row) {
	// 			// if (!row) return
	// 			// const props = row.get('property'),
	// 			// 	store = this.getStore('propertyStore');
	// 			// console.log(props)
	// 			// if ( props && props.length) {
	// 			// 	store.setData(props)
	// 			// } else {
	// 			// 	store.setData({})
	// 			// }
	// 			const grid = this.getView().lookup('propGrid')
	// 			grid.refresh()
	// 		}
	// 	}
	//
	// }
});
