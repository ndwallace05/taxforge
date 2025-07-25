import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 944-XInterview from './Interview';
import 944-XForm from './Form';
import 944-xReducer from '../../store/slices/944-xSlice';

const store = configureStore({
  reducer: {
    944-x: 944-xReducer
  }
});

const meta: Meta<typeof 944-XInterview> = {
  title: 'Forms/944-X',
  component: 944-XInterview,
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
      <944-XForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <944-XForm printMode={true} />
    </Provider>
  ),
};
