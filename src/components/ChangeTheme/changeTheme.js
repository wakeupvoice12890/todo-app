import { Chrome } from 'vue-color';
import { mapGetters, mapMutations } from 'vuex';
import LanguageChange from '@/components/ChangeLanguage/changeLanguage.vue';
export default {
  components: {
    'theme-change': Chrome,
    LanguageChange
  },
  computed: {
    ...mapGetters(['themeColor'])
  },
  methods: {
    ...mapMutations(['UPDATE_THEME'])
  }
};
