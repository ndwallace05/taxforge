import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8027Interview from './Interview';
import 8027Form from './Form';
import 8027Reducer from '../../store/slices/8027Slice';

const store = configureStore({
  reducer: {
    8027: 8027Reducer
  }
});

const meta: Meta<typeof 8027Interview> = {
  title: 'Forms/8027',
  component: 8027Interview,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interview: Story = {
  args: {},
};

export const FormView: Story = {
  render: () => (
    <Provider store={store}>
      <8027Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8027Form printMode={true} />
    </Provider>
  ),
};
