import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 6069Interview from './Interview';
import 6069Form from './Form';
import 6069Reducer from '../../store/slices/6069Slice';

const store = configureStore({
  reducer: {
    6069: 6069Reducer
  }
});

const meta: Meta<typeof 6069Interview> = {
  title: 'Forms/6069',
  component: 6069Interview,
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
      <6069Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <6069Form printMode={true} />
    </Provider>
  ),
};
