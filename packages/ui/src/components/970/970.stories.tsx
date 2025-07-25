import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 970Interview from './Interview';
import 970Form from './Form';
import 970Reducer from '../../store/slices/970Slice';

const store = configureStore({
  reducer: {
    970: 970Reducer
  }
});

const meta: Meta<typeof 970Interview> = {
  title: 'Forms/970',
  component: 970Interview,
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
      <970Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <970Form printMode={true} />
    </Provider>
  ),
};
