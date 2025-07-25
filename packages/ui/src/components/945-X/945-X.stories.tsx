import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 945-XInterview from './Interview';
import 945-XForm from './Form';
import 945-xReducer from '../../store/slices/945-xSlice';

const store = configureStore({
  reducer: {
    945-x: 945-xReducer
  }
});

const meta: Meta<typeof 945-XInterview> = {
  title: 'Forms/945-X',
  component: 945-XInterview,
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
      <945-XForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <945-XForm printMode={true} />
    </Provider>
  ),
};
