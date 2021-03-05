export const icons: {[day: string]: any} = {
  '1': require('../assets/images/icons/1.png'),
  '1n': require('../assets/images/icons/1n.png'),
  '2': require('../assets/images/icons/2.png'),
  '2n': require('../assets/images/icons/2n.png'),
  '2r': require('../assets/images/icons/2r.png'),
  '2rn': require('../assets/images/icons/2rn.png'),
  '3': require('../assets/images/icons/3.png'),
  '3n': require('../assets/images/icons/3n.png'),
  '3tm': require('../assets/images/icons/3tm.png'),
  '4': require('../assets/images/icons/4.png'),
  '4n': require('../assets/images/icons/4n.png'),
  '4r': require('../assets/images/icons/4r.png'),
  '4rn': require('../assets/images/icons/4rn.png'),
  '4t': require('../assets/images/icons/4t.png'),
  '4tn': require('../assets/images/icons/4tn.png'),
  '5': require('../assets/images/icons/5.png'),
  '5n': require('../assets/images/icons/5n.png'),
  '6': require('../assets/images/icons/6.png'),
  '6n': require('../assets/images/icons/6n.png'),
  '7': require('../assets/images/icons/7.png'),
  default: require('../assets/images/icons/1.png'),
};

export const getIcon = (day: string) => {
  return icons[day] ? icons[day] : icons.default;
};
