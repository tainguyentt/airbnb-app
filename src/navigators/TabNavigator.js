import ExploreContainer from '../containers/ExploreContainer';
import TripsContainer from '../containers/TripsContainer';
import ProfileContainer from '../containers/ProfileContainer';
import SavedContainer from '../containers/SavedContainer';
import InboxContainer from '../containers/InboxContainer';
import { TabNavigator } from 'react-navigation';

const LoggedInTabNavigator = TabNavigator({
  ExploreContainer: { screen: ExploreContainer },
  SavedContainer: { screen: SavedContainer },
  TripsContainer: { screen: TripsContainer },
  InboxContainer: { screen: InboxContainer },
  ProfileContainer: { screen: ProfileContainer },
}, {
    tabBarOptions: {
      labelStyle: {
        fontWeight: '600',
      },
      activeTintColor: 'pink',
    }
  });

export default LoggedInTabNavigator;