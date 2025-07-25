import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 5471Interview from './Interview';
import 5471Form from './Form';
import 5471Reducer from '../../store/slices/5471Slice';

const store = configureStore({
  reducer: {
    5471: 5471Reducer
  }
});

const meta: Meta<typeof 5471Interview> = {
  title: 'Forms/5471',
  component: 5471Interview,
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
      <5471Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <5471Form printMode={true} />
    </Provider>
  ),
};
