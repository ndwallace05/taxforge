import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8606Interview from './Interview';
import 8606Form from './Form';
import 8606Reducer from '../../store/slices/8606Slice';

const store = configureStore({
  reducer: {
    8606: 8606Reducer
  }
});

const meta: Meta<typeof 8606Interview> = {
  title: 'Forms/8606',
  component: 8606Interview,
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
      <8606Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8606Form printMode={true} />
    </Provider>
  ),
};
