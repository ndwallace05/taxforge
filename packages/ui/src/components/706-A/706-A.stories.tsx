import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 706-AInterview from './Interview';
import 706-AForm from './Form';
import 706-aReducer from '../../store/slices/706-aSlice';

const store = configureStore({
  reducer: {
    706-a: 706-aReducer
  }
});

const meta: Meta<typeof 706-AInterview> = {
  title: 'Forms/706-A',
  component: 706-AInterview,
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
      <706-AForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <706-AForm printMode={true} />
    </Provider>
  ),
};
