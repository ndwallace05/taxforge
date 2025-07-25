import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 7004Interview from './Interview';
import 7004Form from './Form';
import 7004Reducer from '../../store/slices/7004Slice';

const store = configureStore({
  reducer: {
    7004: 7004Reducer
  }
});

const meta: Meta<typeof 7004Interview> = {
  title: 'Forms/7004',
  component: 7004Interview,
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
      <7004Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <7004Form printMode={true} />
    </Provider>
  ),
};
