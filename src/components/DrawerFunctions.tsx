import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParamList } from '../navigation/MyStack';

export const toggleDrawerHandler = (navigation: DrawerNavigationProp<RootStackParamList>) => {
  navigation.toggleDrawer();
}