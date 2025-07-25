import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1099-DIVInterview from './Interview';
import 1099-DIVForm from './Form';
import 1099-divReducer from '../../store/slices/1099-divSlice';

const store = configureStore({
  reducer: {
    1099-div: 1099-divReducer
  }
});

const meta: Meta<typeof 1099-DIVInterview> = {
  title: 'Forms/1099-DIV',
  component: 1099-DIVInterview,
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
      <1099-DIVForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1099-DIVForm printMode={true} />
    </Provider>
  ),
};
