import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 6478Interview from './Interview';
import 6478Form from './Form';
import 6478Reducer from '../../store/slices/6478Slice';

const store = configureStore({
  reducer: {
    6478: 6478Reducer
  }
});

const meta: Meta<typeof 6478Interview> = {
  title: 'Forms/6478',
  component: 6478Interview,
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
      <6478Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <6478Form printMode={true} />
    </Provider>
  ),
};
