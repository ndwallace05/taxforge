import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 4952Interview from './Interview';
import 4952Form from './Form';
import 4952Reducer from '../../store/slices/4952Slice';

const store = configureStore({
  reducer: {
    4952: 4952Reducer
  }
});

const meta: Meta<typeof 4952Interview> = {
  title: 'Forms/4952',
  component: 4952Interview,
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
      <4952Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <4952Form printMode={true} />
    </Provider>
  ),
};
