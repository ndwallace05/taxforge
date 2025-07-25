import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8814Interview from './Interview';
import 8814Form from './Form';
import 8814Reducer from '../../store/slices/8814Slice';

const store = configureStore({
  reducer: {
    8814: 8814Reducer
  }
});

const meta: Meta<typeof 8814Interview> = {
  title: 'Forms/8814',
  component: 8814Interview,
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
      <8814Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8814Form printMode={true} />
    </Provider>
  ),
};
