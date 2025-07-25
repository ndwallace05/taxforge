import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8812Interview from './Interview';
import 8812Form from './Form';
import 8812Reducer from '../../store/slices/8812Slice';

const store = configureStore({
  reducer: {
    8812: 8812Reducer
  }
});

const meta: Meta<typeof 8812Interview> = {
  title: 'Forms/8812',
  component: 8812Interview,
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
      <8812Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8812Form printMode={true} />
    </Provider>
  ),
};
