import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1098-CInterview from './Interview';
import 1098-CForm from './Form';
import 1098-cReducer from '../../store/slices/1098-cSlice';

const store = configureStore({
  reducer: {
    1098-c: 1098-cReducer
  }
});

const meta: Meta<typeof 1098-CInterview> = {
  title: 'Forms/1098-C',
  component: 1098-CInterview,
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
      <1098-CForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1098-CForm printMode={true} />
    </Provider>
  ),
};
