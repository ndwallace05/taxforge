import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import W-8Interview from './Interview';
import W-8Form from './Form';
import w-8Reducer from '../../store/slices/w-8Slice';

const store = configureStore({
  reducer: {
    w-8: w-8Reducer
  }
});

const meta: Meta<typeof W-8Interview> = {
  title: 'Forms/W-8',
  component: W-8Interview,
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
      <W-8Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <W-8Form printMode={true} />
    </Provider>
  ),
};
