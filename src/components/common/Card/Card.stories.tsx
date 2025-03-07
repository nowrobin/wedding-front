
import Card from '@/components/common/Card/Card';
import type { Meta, StoryObj } from '@storybook/react';
import weddingImage1 from '@/assets/image/wedding1.png'
import weddingImage2 from '@/assets/image/wedding2.png'

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const FirstCard: Story = {
  args: {
    image: weddingImage1,
    id: 1,
    title: '청첩장 1',
  },
};
export const SecondCard: Story = {
  args: {
    image: weddingImage2,
    id: 1,
    title: '청첩장 2',
  },
};