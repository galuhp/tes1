NestedListDemo.music_store = new Ext.data.TreeStore({
	model : 'ListItems',
	proxy:{
		type : 'ajax',
		url :'data/tracks.json',
		reader:{
			type:'tree',
			root:'items'
		}
	}
	
});