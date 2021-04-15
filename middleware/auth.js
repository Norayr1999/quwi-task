export default function({ store, redirect, route}) {
  let token = null
  let user = null
  if (process.browser){
    token = localStorage.getItem('token')
    user = localStorage.getItem('user')
  } else {
    token = store.state.token
  }

  if (token && route.path === '/login') {
    store.commit('setUser', {
      user,
      token
    });
    return redirect('/project')
  }

  if (!token) {
    if (process.browser){
      token = localStorage.removeItem('token');
      user = localStorage.removeItem('user');
    }

    if (route.path === '/login') {
      return
    } else redirect('/login')
  }
}
