import auth from'../plugins/auth';

export default async function ({store}) {
  if (store.getters['user/isAuthenticated']) {
    return;
  }

  const user = await auth();
  if (!user) {
    store.dispatch('user/clear');
    return;
  }

  console.log(user);
  user.provider = user.providerData[0].providerId;
  store.dispatch('user/save', user);
}
