import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 4136Interview from './Interview';
import 4136Form from './Form';
import 4136Reducer from '../../store/slices/4136Slice';

const store = configureStore({
  reducer: {
    4136: 4136Reducer
  }
});

const meta: Meta<typeof 4136Interview> = {
  title: 'Forms/4136',
  component: 4136Interview,
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
      <4136Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <4136Form printMode={true} />
    </Provider>
  ),
};
