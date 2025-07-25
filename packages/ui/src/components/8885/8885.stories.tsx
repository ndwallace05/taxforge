import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8885Interview from './Interview';
import 8885Form from './Form';
import 8885Reducer from '../../store/slices/8885Slice';

const store = configureStore({
  reducer: {
    8885: 8885Reducer
  }
});

const meta: Meta<typeof 8885Interview> = {
  title: 'Forms/8885',
  component: 8885Interview,
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
      <8885Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8885Form printMode={true} />
    </Provider>
  ),
};
