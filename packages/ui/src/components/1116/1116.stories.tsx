import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1116Interview from './Interview';
import 1116Form from './Form';
import 1116Reducer from '../../store/slices/1116Slice';

const store = configureStore({
  reducer: {
    1116: 1116Reducer
  }
});

const meta: Meta<typeof 1116Interview> = {
  title: 'Forms/1116',
  component: 1116Interview,
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
      <1116Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1116Form printMode={true} />
    </Provider>
  ),
};
