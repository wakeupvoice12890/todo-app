export default {
  name: 'todo-filtered',
  data() {
    return {
      themeColor: ''
    };
  },
  computed: {
    filter() {
      return this.$store.state.filter;
    },
    updatedColor() {
      return this.$store.getters.themeColor;
    },
    themeStyle() {
      return {
        'background-color': this.updatedColor
      };
    }
  },
  methods: {
    changeFilter(filter) {
      this.$store.dispatch('updateFilter', filter);
    }
  }
};
