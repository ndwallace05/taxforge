import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1120-REITInterview from './Interview';
import 1120-REITForm from './Form';
import 1120-reitReducer from '../../store/slices/1120-reitSlice';

const store = configureStore({
  reducer: {
    1120-reit: 1120-reitReducer
  }
});

const meta: Meta<typeof 1120-REITInterview> = {
  title: 'Forms/1120-REIT',
  component: 1120-REITInterview,
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
      <1120-REITForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1120-REITForm printMode={true} />
    </Provider>
  ),
};
