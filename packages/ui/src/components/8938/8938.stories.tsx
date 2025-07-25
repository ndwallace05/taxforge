import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8938Interview from './Interview';
import 8938Form from './Form';
import 8938Reducer from '../../store/slices/8938Slice';

const store = configureStore({
  reducer: {
    8938: 8938Reducer
  }
});

const meta: Meta<typeof 8938Interview> = {
  title: 'Forms/8938',
  component: 8938Interview,
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
      <8938Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8938Form printMode={true} />
    </Provider>
  ),
};
