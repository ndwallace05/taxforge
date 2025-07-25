import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1099-CInterview from './Interview';
import 1099-CForm from './Form';
import 1099-cReducer from '../../store/slices/1099-cSlice';

const store = configureStore({
  reducer: {
    1099-c: 1099-cReducer
  }
});

const meta: Meta<typeof 1099-CInterview> = {
  title: 'Forms/1099-C',
  component: 1099-CInterview,
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
      <1099-CForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1099-CForm printMode={true} />
    </Provider>
  ),
};
