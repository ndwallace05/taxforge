import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import SS-4Interview from './Interview';
import SS-4Form from './Form';
import ss-4Reducer from '../../store/slices/ss-4Slice';

const store = configureStore({
  reducer: {
    ss-4: ss-4Reducer
  }
});

const meta: Meta<typeof SS-4Interview> = {
  title: 'Forms/SS-4',
  component: SS-4Interview,
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
      <SS-4Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <SS-4Form printMode={true} />
    </Provider>
  ),
};
