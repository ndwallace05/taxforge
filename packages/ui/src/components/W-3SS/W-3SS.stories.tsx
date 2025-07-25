import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import W-3SSInterview from './Interview';
import W-3SSForm from './Form';
import w-3ssReducer from '../../store/slices/w-3ssSlice';

const store = configureStore({
  reducer: {
    w-3ss: w-3ssReducer
  }
});

const meta: Meta<typeof W-3SSInterview> = {
  title: 'Forms/W-3SS',
  component: W-3SSInterview,
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
      <W-3SSForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <W-3SSForm printMode={true} />
    </Provider>
  ),
};
