import Header from '@/components/common/Header/Header';
import type { Meta, StoryObj } from '@storybook/react';


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    text: "a",
    leftButton: <>Left Button</>,
    rightButton: <>Right Button</>,
  },
};