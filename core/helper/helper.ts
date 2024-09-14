import { IoniconsIconName } from 'core/layout/types';

export const getIconName = (
  routeName: string,
  focused: boolean
): IoniconsIconName => {
  const icons: Record<string, IoniconsIconName> = {
    Home: focused ? 'home' : 'home-outline',
    Upload: focused ? 'cloud-upload' : 'cloud-upload-outline',
    Order: focused ? 'cube' : 'cube-outline',
    Profile: focused ? 'person' : 'person-outline',
  };

  return icons[routeName] || 'home-outline';
};
