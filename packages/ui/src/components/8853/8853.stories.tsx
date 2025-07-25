import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8853Interview from './Interview';
import 8853Form from './Form';
import 8853Reducer from '../../store/slices/8853Slice';

const store = configureStore({
  reducer: {
    8853: 8853Reducer
  }
});

const meta: Meta<typeof 8853Interview> = {
  title: 'Forms/8853',
  component: 8853Interview,
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
      <8853Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8853Form printMode={true} />
    </Provider>
  ),
};
