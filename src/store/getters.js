const getters = {
    siderbarRouters:state=>state.permission.siderbarRouters,
    rols: state => state.user.rols,
    user: state => state.user.user,
    loadMenus: state => state.user.loadMenus,
}
export default getters