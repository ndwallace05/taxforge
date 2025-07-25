import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1098-FInterview from './Interview';
import 1098-FForm from './Form';
import 1098-fReducer from '../../store/slices/1098-fSlice';

const store = configureStore({
  reducer: {
    1098-f: 1098-fReducer
  }
});

const meta: Meta<typeof 1098-FInterview> = {
  title: 'Forms/1098-F',
  component: 1098-FInterview,
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
      <1098-FForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1098-FForm printMode={true} />
    </Provider>
  ),
};
