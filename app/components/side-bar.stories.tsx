import { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import SideBar from './side-bar';

export default {
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

export const Default: ComponentStoryObj<typeof SideBar> = {};
