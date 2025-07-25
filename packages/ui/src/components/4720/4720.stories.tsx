import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 4720Interview from './Interview';
import 4720Form from './Form';
import 4720Reducer from '../../store/slices/4720Slice';

const store = configureStore({
  reducer: {
    4720: 4720Reducer
  }
});

const meta: Meta<typeof 4720Interview> = {
  title: 'Forms/4720',
  component: 4720Interview,
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
      <4720Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <4720Form printMode={true} />
    </Provider>
  ),
};
