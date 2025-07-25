import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 13614-CInterview from './Interview';
import 13614-CForm from './Form';
import 13614-cReducer from '../../store/slices/13614-cSlice';

const store = configureStore({
  reducer: {
    13614-c: 13614-cReducer
  }
});

const meta: Meta<typeof 13614-CInterview> = {
  title: 'Forms/13614-C',
  component: 13614-CInterview,
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
      <13614-CForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <13614-CForm printMode={true} />
    </Provider>
  ),
};
