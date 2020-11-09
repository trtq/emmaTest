import {ImageSourcePropType} from 'react-native';

export const pullImage = (name: string): ImageSourcePropType => {
  switch (name) {
    case 'AllanMunger':
      return require('./AllanMunger.png');
    case 'AmandaBrady':
      return require('./AmandaBrady.png');
    case 'AshleyMcCarthy':
      return require('./AshleyMcCarthy.png');
    case 'CarlosSlattery':
      return require('./CarlosSlattery.png');
    case 'CarolePoland':
      return require('./CarolePoland.png');
    case 'CecilFolk':
      return require('./CecilFolk.png');
    case 'CelesteBurton':
      return require('./CelesteBurton.png');
    case 'CharlotteWaltson':
      return require('./CharlotteWaltson.png');
    case 'ColinBallinger':
      return require('./ColinBallinger.png');
    default:
      return require('./AllanMunger.png');
  }
};
