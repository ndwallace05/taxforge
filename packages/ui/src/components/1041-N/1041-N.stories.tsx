import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1041-NInterview from './Interview';
import 1041-NForm from './Form';
import 1041-nReducer from '../../store/slices/1041-nSlice';

const store = configureStore({
  reducer: {
    1041-n: 1041-nReducer
  }
});

const meta: Meta<typeof 1041-NInterview> = {
  title: 'Forms/1041-N',
  component: 1041-NInterview,
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
      <1041-NForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1041-NForm printMode={true} />
    </Provider>
  ),
};
