import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1118Interview from './Interview';
import 1118Form from './Form';
import 1118Reducer from '../../store/slices/1118Slice';

const store = configureStore({
  reducer: {
    1118: 1118Reducer
  }
});

const meta: Meta<typeof 1118Interview> = {
  title: 'Forms/1118',
  component: 1118Interview,
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
      <1118Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1118Form printMode={true} />
    </Provider>
  ),
};
