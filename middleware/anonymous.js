export default async function ({store, redirect}) {
  if (store.getters['user/isAuthenticated']) {
    return redirect('/');
  }
}
