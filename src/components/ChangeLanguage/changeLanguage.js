import {
  mapGetters,
  mapMutations
} from 'vuex';
export default {
  name: 'language-change',
  data() {
    return {
      langs: ['en', 'hi']
    };
  },
  computed: {
    ...mapGetters(['themeColor', 'selectedLanguage'])
  },
  methods: {
    ...mapMutations(['UPDATE_THEME', 'UPDATE_LANGUAGE'])
  }
};
