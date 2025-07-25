import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 2106Interview from './Interview';
import 2106Form from './Form';
import 2106Reducer from '../../store/slices/2106Slice';

const store = configureStore({
  reducer: {
    2106: 2106Reducer
  }
});

const meta: Meta<typeof 2106Interview> = {
  title: 'Forms/2106',
  component: 2106Interview,
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
      <2106Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <2106Form printMode={true} />
    </Provider>
  ),
};
