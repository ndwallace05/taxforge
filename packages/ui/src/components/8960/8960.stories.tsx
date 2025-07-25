import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8960Interview from './Interview';
import 8960Form from './Form';
import 8960Reducer from '../../store/slices/8960Slice';

const store = configureStore({
  reducer: {
    8960: 8960Reducer
  }
});

const meta: Meta<typeof 8960Interview> = {
  title: 'Forms/8960',
  component: 8960Interview,
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
      <8960Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8960Form printMode={true} />
    </Provider>
  ),
};
