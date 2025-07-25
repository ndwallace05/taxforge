import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 2210Interview from './Interview';
import 2210Form from './Form';
import 2210Reducer from '../../store/slices/2210Slice';

const store = configureStore({
  reducer: {
    2210: 2210Reducer
  }
});

const meta: Meta<typeof 2210Interview> = {
  title: 'Forms/2210',
  component: 2210Interview,
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
      <2210Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <2210Form printMode={true} />
    </Provider>
  ),
};
