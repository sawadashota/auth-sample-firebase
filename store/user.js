export const state = () => ({
  uid: '',
  displayName: '',
  photoURL: '',
  email: '',
  emailVerified: false,
});

export const mutations = {
  clear(state) {
    state.uid = '';
    state.displayName = '';
    state.photoURL = '';
    state.email = '';
    state.emailVerified = false;
  },

  save(state, {uid, displayName, photoURL, email, emailVerified}) {
    state.uid = uid;
    state.displayName = displayName;
    state.photoURL = photoURL;
    state.email = email;
    state.emailVerified = emailVerified;
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
