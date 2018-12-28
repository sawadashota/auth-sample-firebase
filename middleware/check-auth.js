import auth from'../plugins/auth';

export default async function ({store, redirect}) {
  if (store.getters['user/isAuthenticated']) {
    return;
  }

  const user = await auth();
  if (!user) {
    store.dispatch('user/clear');
  }

  store.dispatch('user/save', user);
}
