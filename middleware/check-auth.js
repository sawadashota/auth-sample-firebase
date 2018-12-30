import auth from'~/plugins/auth';
import storeUser from'~/plugins/store-user';

export default async function ({store}) {
  if (store.getters['user/isAuthenticated']) {
    return;
  }

  const user = await auth();
  if (!user) {
    store.dispatch('user/clear');
    return;
  }

  storeUser(store, user);
}
