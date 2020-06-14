app = new Vue({
	el: '.vue',
	router: new VueRouter({
		routes: [
			{
				path: '/',
				component: beranda
			},
			{
				path: '/hasil',
				component: hasil
			}
		]
	}),
	store: new Vuex.Store({
		state: {
			output: []
		},
		mutations: {
			ubah(state, x){
				state.output = x.split('\n').sort(() => Math.random() - 0.5)
			}
		}
	})
})