import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 6765Interview from './Interview';
import 6765Form from './Form';
import 6765Reducer from '../../store/slices/6765Slice';

const store = configureStore({
  reducer: {
    6765: 6765Reducer
  }
});

const meta: Meta<typeof 6765Interview> = {
  title: 'Forms/6765',
  component: 6765Interview,
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
      <6765Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <6765Form printMode={true} />
    </Provider>
  ),
};
