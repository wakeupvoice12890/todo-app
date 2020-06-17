<script>
import localSession from '@/config/localSession';
export default {
  name: 'checkAuthentication',
  computed: {
    username() {
      return this.$store.getters.userDetails.email;
    }
  },
  methods: {
    checklogin() {
      if (!this.$store.getters.isAuthenticated) {
        this.flushData();
      }
    },
    flushData() {
      localSession.flush('accessToken');
      this.$store.dispatch('userDetails', '');
      this.$store.dispatch('userDetails', {});
      this.$store.dispatch('loggedIn', null);
      this.$store.dispatch('themeChange', '#005bcc');
      this.$router.push({ name: 'login' });
    }
  }
};
</script>
