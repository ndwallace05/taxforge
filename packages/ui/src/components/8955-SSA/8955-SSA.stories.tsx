import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8955-SSAInterview from './Interview';
import 8955-SSAForm from './Form';
import 8955-ssaReducer from '../../store/slices/8955-ssaSlice';

const store = configureStore({
  reducer: {
    8955-ssa: 8955-ssaReducer
  }
});

const meta: Meta<typeof 8955-SSAInterview> = {
  title: 'Forms/8955-SSA',
  component: 8955-SSAInterview,
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
      <8955-SSAForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8955-SSAForm printMode={true} />
    </Provider>
  ),
};
