import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 5310Interview from './Interview';
import 5310Form from './Form';
import 5310Reducer from '../../store/slices/5310Slice';

const store = configureStore({
  reducer: {
    5310: 5310Reducer
  }
});

const meta: Meta<typeof 5310Interview> = {
  title: 'Forms/5310',
  component: 5310Interview,
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
      <5310Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <5310Form printMode={true} />
    </Provider>
  ),
};
