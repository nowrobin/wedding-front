import MyPageItem from '@/components/common/MyPage/MyPageItem';
import type { Meta, StoryObj } from '@storybook/react';
import phototalk from '../../../assets/phototalk.svg';

const meta: Meta<typeof MyPageItem> = {
  component: MyPageItem,
};

export default meta;
type Story = StoryObj<typeof MyPageItem>;

export const MyPageItems: Story = {
  args: {
    icon: phototalk,
    title: 'My Page',
    detail: "Details",
    href: ""
  },
};