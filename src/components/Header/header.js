import localSession from '@/config/localSession';
import Auth from '@/components/mixins/auth';
export default {
  name: 'header-component',
  mixins: [Auth],
  data() {
    return {
      logoTitle: 'Todo - App'
    };
  },
  computed: {
    authenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      localSession.flush('accessToken');
      this.flushData();
    }
  }
};
