import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 943-XInterview from './Interview';
import 943-XForm from './Form';
import 943-xReducer from '../../store/slices/943-xSlice';

const store = configureStore({
  reducer: {
    943-x: 943-xReducer
  }
});

const meta: Meta<typeof 943-XInterview> = {
  title: 'Forms/943-X',
  component: 943-XInterview,
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
      <943-XForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <943-XForm printMode={true} />
    </Provider>
  ),
};
