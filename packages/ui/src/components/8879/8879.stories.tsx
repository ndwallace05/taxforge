import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8879Interview from './Interview';
import 8879Form from './Form';
import 8879Reducer from '../../store/slices/8879Slice';

const store = configureStore({
  reducer: {
    8879: 8879Reducer
  }
});

const meta: Meta<typeof 8879Interview> = {
  title: 'Forms/8879',
  component: 8879Interview,
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
      <8879Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8879Form printMode={true} />
    </Provider>
  ),
};
