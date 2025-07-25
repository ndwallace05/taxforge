import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import W-9Interview from './Interview';
import W-9Form from './Form';
import w-9Reducer from '../../store/slices/w-9Slice';

const store = configureStore({
  reducer: {
    w-9: w-9Reducer
  }
});

const meta: Meta<typeof W-9Interview> = {
  title: 'Forms/W-9',
  component: W-9Interview,
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
      <W-9Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <W-9Form printMode={true} />
    </Provider>
  ),
};
