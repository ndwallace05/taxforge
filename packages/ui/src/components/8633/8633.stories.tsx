import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8633Interview from './Interview';
import 8633Form from './Form';
import 8633Reducer from '../../store/slices/8633Slice';

const store = configureStore({
  reducer: {
    8633: 8633Reducer
  }
});

const meta: Meta<typeof 8633Interview> = {
  title: 'Forms/8633',
  component: 8633Interview,
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
      <8633Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8633Form printMode={true} />
    </Provider>
  ),
};
