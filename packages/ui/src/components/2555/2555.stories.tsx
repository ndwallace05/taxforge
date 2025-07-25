import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 2555Interview from './Interview';
import 2555Form from './Form';
import 2555Reducer from '../../store/slices/2555Slice';

const store = configureStore({
  reducer: {
    2555: 2555Reducer
  }
});

const meta: Meta<typeof 2555Interview> = {
  title: 'Forms/2555',
  component: 2555Interview,
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
      <2555Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <2555Form printMode={true} />
    </Provider>
  ),
};
