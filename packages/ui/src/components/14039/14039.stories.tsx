import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 14039Interview from './Interview';
import 14039Form from './Form';
import 14039Reducer from '../../store/slices/14039Slice';

const store = configureStore({
  reducer: {
    14039: 14039Reducer
  }
});

const meta: Meta<typeof 14039Interview> = {
  title: 'Forms/14039',
  component: 14039Interview,
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
      <14039Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <14039Form printMode={true} />
    </Provider>
  ),
};
