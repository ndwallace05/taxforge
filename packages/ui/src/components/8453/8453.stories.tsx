import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8453Interview from './Interview';
import 8453Form from './Form';
import 8453Reducer from '../../store/slices/8453Slice';

const store = configureStore({
  reducer: {
    8453: 8453Reducer
  }
});

const meta: Meta<typeof 8453Interview> = {
  title: 'Forms/8453',
  component: 8453Interview,
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
      <8453Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8453Form printMode={true} />
    </Provider>
  ),
};
