import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import SS-8Interview from './Interview';
import SS-8Form from './Form';
import ss-8Reducer from '../../store/slices/ss-8Slice';

const store = configureStore({
  reducer: {
    ss-8: ss-8Reducer
  }
});

const meta: Meta<typeof SS-8Interview> = {
  title: 'Forms/SS-8',
  component: SS-8Interview,
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
      <SS-8Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <SS-8Form printMode={true} />
    </Provider>
  ),
};
