import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 5405Interview from './Interview';
import 5405Form from './Form';
import 5405Reducer from '../../store/slices/5405Slice';

const store = configureStore({
  reducer: {
    5405: 5405Reducer
  }
});

const meta: Meta<typeof 5405Interview> = {
  title: 'Forms/5405',
  component: 5405Interview,
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
      <5405Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <5405Form printMode={true} />
    </Provider>
  ),
};
