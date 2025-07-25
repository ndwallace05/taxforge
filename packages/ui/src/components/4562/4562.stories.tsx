import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 4562Interview from './Interview';
import 4562Form from './Form';
import 4562Reducer from '../../store/slices/4562Slice';

const store = configureStore({
  reducer: {
    4562: 4562Reducer
  }
});

const meta: Meta<typeof 4562Interview> = {
  title: 'Forms/4562',
  component: 4562Interview,
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
      <4562Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <4562Form printMode={true} />
    </Provider>
  ),
};
