/* eslint-disable */

import SideBar from './SideBar';



import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';


storiesOf('SideBar', module)
  .addDecorator(StoryRouter())
  .add('sideBar', () => (
    <SideBar />
  ));

export default {
  title: "SideBar",

  component: SideBar,
};

export const Default = () => <SideBar />;


Default.story = {
  name: 'default',
  parameters: {
    reactRouter: {
      routePath: '/pong',
      //routeParams: { userId: '42' },
      routeHandle: "Profile",
      //  searchParams: { tab: 'activityLog' },
      routeState: { fromPage: 'homePage' },
    }
  }
};
