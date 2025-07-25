import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1041-QFTInterview from './Interview';
import 1041-QFTForm from './Form';
import 1041-qftReducer from '../../store/slices/1041-qftSlice';

const store = configureStore({
  reducer: {
    1041-qft: 1041-qftReducer
  }
});

const meta: Meta<typeof 1041-QFTInterview> = {
  title: 'Forms/1041-QFT',
  component: 1041-QFTInterview,
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
      <1041-QFTForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1041-QFTForm printMode={true} />
    </Provider>
  ),
};
