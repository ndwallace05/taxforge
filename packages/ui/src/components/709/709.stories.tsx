import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 709Interview from './Interview';
import 709Form from './Form';
import 709Reducer from '../../store/slices/709Slice';

const store = configureStore({
  reducer: {
    709: 709Reducer
  }
});

const meta: Meta<typeof 709Interview> = {
  title: 'Forms/709',
  component: 709Interview,
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
      <709Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <709Form printMode={true} />
    </Provider>
  ),
};
