import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8936Interview from './Interview';
import 8936Form from './Form';
import 8936Reducer from '../../store/slices/8936Slice';

const store = configureStore({
  reducer: {
    8936: 8936Reducer
  }
});

const meta: Meta<typeof 8936Interview> = {
  title: 'Forms/8936',
  component: 8936Interview,
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
      <8936Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8936Form printMode={true} />
    </Provider>
  ),
};
