import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 926Interview from './Interview';
import 926Form from './Form';
import 926Reducer from '../../store/slices/926Slice';

const store = configureStore({
  reducer: {
    926: 926Reducer
  }
});

const meta: Meta<typeof 926Interview> = {
  title: 'Forms/926',
  component: 926Interview,
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
      <926Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <926Form printMode={true} />
    </Provider>
  ),
};
