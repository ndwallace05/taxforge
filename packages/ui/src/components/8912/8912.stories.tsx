import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8912Interview from './Interview';
import 8912Form from './Form';
import 8912Reducer from '../../store/slices/8912Slice';

const store = configureStore({
  reducer: {
    8912: 8912Reducer
  }
});

const meta: Meta<typeof 8912Interview> = {
  title: 'Forms/8912',
  component: 8912Interview,
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
      <8912Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8912Form printMode={true} />
    </Provider>
  ),
};
