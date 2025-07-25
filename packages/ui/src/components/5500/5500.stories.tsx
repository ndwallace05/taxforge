import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 5500Interview from './Interview';
import 5500Form from './Form';
import 5500Reducer from '../../store/slices/5500Slice';

const store = configureStore({
  reducer: {
    5500: 5500Reducer
  }
});

const meta: Meta<typeof 5500Interview> = {
  title: 'Forms/5500',
  component: 5500Interview,
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
      <5500Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <5500Form printMode={true} />
    </Provider>
  ),
};
