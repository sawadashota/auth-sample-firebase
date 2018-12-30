import auth from'~/plugins/auth';

export default async function ({store}) {
  if (store.getters['user/isAuthenticated']) {
    return;
  }

  const user = await auth();
  if (!user) {
    store.dispatch('user/clear');
    return;
  }

  user.providers = user.providerData.map(provider => provider.providerId);
  store.dispatch('user/save', user);
}
