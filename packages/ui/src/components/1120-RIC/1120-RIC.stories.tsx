import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1120-RICInterview from './Interview';
import 1120-RICForm from './Form';
import 1120-ricReducer from '../../store/slices/1120-ricSlice';

const store = configureStore({
  reducer: {
    1120-ric: 1120-ricReducer
  }
});

const meta: Meta<typeof 1120-RICInterview> = {
  title: 'Forms/1120-RIC',
  component: 1120-RICInterview,
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
      <1120-RICForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1120-RICForm printMode={true} />
    </Provider>
  ),
};
