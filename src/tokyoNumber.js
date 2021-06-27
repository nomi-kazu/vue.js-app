export const tokyoNumber = {
  data() {
    return {
      title: 'Welcome to Tokyo',
      subTitle: 'Tokyo is a greate city'
    };
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  }
};