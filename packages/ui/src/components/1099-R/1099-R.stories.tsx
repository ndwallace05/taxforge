import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1099-RInterview from './Interview';
import 1099-RForm from './Form';
import 1099-rReducer from '../../store/slices/1099-rSlice';

const store = configureStore({
  reducer: {
    1099-r: 1099-rReducer
  }
});

const meta: Meta<typeof 1099-RInterview> = {
  title: 'Forms/1099-R',
  component: 1099-RInterview,
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
      <1099-RForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1099-RForm printMode={true} />
    </Provider>
  ),
};
