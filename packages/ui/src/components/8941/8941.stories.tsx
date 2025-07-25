import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8941Interview from './Interview';
import 8941Form from './Form';
import 8941Reducer from '../../store/slices/8941Slice';

const store = configureStore({
  reducer: {
    8941: 8941Reducer
  }
});

const meta: Meta<typeof 8941Interview> = {
  title: 'Forms/8941',
  component: 8941Interview,
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
      <8941Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8941Form printMode={true} />
    </Provider>
  ),
};
