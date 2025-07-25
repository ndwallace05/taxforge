import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 945Interview from './Interview';
import 945Form from './Form';
import 945Reducer from '../../store/slices/945Slice';

const store = configureStore({
  reducer: {
    945: 945Reducer
  }
});

const meta: Meta<typeof 945Interview> = {
  title: 'Forms/945',
  component: 945Interview,
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
      <945Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <945Form printMode={true} />
    </Provider>
  ),
};
