import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8880Interview from './Interview';
import 8880Form from './Form';
import 8880Reducer from '../../store/slices/8880Slice';

const store = configureStore({
  reducer: {
    8880: 8880Reducer
  }
});

const meta: Meta<typeof 8880Interview> = {
  title: 'Forms/8880',
  component: 8880Interview,
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
      <8880Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8880Form printMode={true} />
    </Provider>
  ),
};
