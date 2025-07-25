import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 4684Interview from './Interview';
import 4684Form from './Form';
import 4684Reducer from '../../store/slices/4684Slice';

const store = configureStore({
  reducer: {
    4684: 4684Reducer
  }
});

const meta: Meta<typeof 4684Interview> = {
  title: 'Forms/4684',
  component: 4684Interview,
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
      <4684Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <4684Form printMode={true} />
    </Provider>
  ),
};
