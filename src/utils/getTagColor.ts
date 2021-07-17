export default (tag) => {
  switch (tag.name) {
    case 'javascript':
      return {
        backgroundColor: '#F7DF1E',
        color: '#000000'
      };

    case 'git':
      return {
        backgroundColor: '#F54D27',
        color: '#f5f5f5'
      };

    case 'angular':
      return {
        backgroundColor: '#A9022A',
        color: '#FFF'
      };

    default:
      break;
  }
}