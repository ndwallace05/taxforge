import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 2441Interview from './Interview';
import 2441Form from './Form';
import 2441Reducer from '../../store/slices/2441Slice';

const store = configureStore({
  reducer: {
    2441: 2441Reducer
  }
});

const meta: Meta<typeof 2441Interview> = {
  title: 'Forms/2441',
  component: 2441Interview,
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
      <2441Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <2441Form printMode={true} />
    </Provider>
  ),
};
