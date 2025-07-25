import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8879-CInterview from './Interview';
import 8879-CForm from './Form';
import 8879-cReducer from '../../store/slices/8879-cSlice';

const store = configureStore({
  reducer: {
    8879-c: 8879-cReducer
  }
});

const meta: Meta<typeof 8879-CInterview> = {
  title: 'Forms/8879-C',
  component: 8879-CInterview,
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
      <8879-CForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8879-CForm printMode={true} />
    </Provider>
  ),
};
