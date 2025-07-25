import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8453-CInterview from './Interview';
import 8453-CForm from './Form';
import 8453-cReducer from '../../store/slices/8453-cSlice';

const store = configureStore({
  reducer: {
    8453-c: 8453-cReducer
  }
});

const meta: Meta<typeof 8453-CInterview> = {
  title: 'Forms/8453-C',
  component: 8453-CInterview,
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
      <8453-CForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8453-CForm printMode={true} />
    </Provider>
  ),
};
