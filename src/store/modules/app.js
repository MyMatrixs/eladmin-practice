export default {

    state: {
        Sidebar:{
            opened:false
        }
    },
    getters: {
    },
    mutations: {
        changeOpened(state){
            console.log('改变状态')
            state.Sidebar.opened = !state.Sidebar.opened
        }
    },
    actions: {
    },
    modules: {
    }
  }