export default async function (store, user) {
  user.providers = user.providerData.map(provider => provider.providerId);
  store.dispatch('user/save', user);
}
