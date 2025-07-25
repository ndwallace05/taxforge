import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8870Interview from './Interview';
import 8870Form from './Form';
import 8870Reducer from '../../store/slices/8870Slice';

const store = configureStore({
  reducer: {
    8870: 8870Reducer
  }
});

const meta: Meta<typeof 8870Interview> = {
  title: 'Forms/8870',
  component: 8870Interview,
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
      <8870Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8870Form printMode={true} />
    </Provider>
  ),
};
