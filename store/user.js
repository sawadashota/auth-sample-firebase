export const state = () => ({
  uid: '',
  displayName: '',
  photoURL: '',
  email: '',
  emailVerified: false,
  provider: '', // password, google or etc...
});

export const mutations = {
  clear(state) {
    state.uid = '';
    state.displayName = '';
    state.photoURL = '';
    state.email = '';
    state.emailVerified = false;
  },

  save(state, {uid, displayName, photoURL, email, emailVerified, provider}) {
    state.uid = uid;
    state.displayName = displayName;
    state.photoURL = photoURL;
    state.email = email;
    state.emailVerified = emailVerified;
    state.provider = provider;
  },
};

export const actions = {
  clear({commit}) {
    commit('clear');
  },
  save({commit}, user) {
    commit('save', user);
  },
};

export const getters = {
  user: state => state,
  isAuthenticated: state => !!state.uid
};
