import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8615Interview from './Interview';
import 8615Form from './Form';
import 8615Reducer from '../../store/slices/8615Slice';

const store = configureStore({
  reducer: {
    8615: 8615Reducer
  }
});

const meta: Meta<typeof 8615Interview> = {
  title: 'Forms/8615',
  component: 8615Interview,
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
      <8615Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8615Form printMode={true} />
    </Provider>
  ),
};
