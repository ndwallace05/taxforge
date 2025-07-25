import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8862Interview from './Interview';
import 8862Form from './Form';
import 8862Reducer from '../../store/slices/8862Slice';

const store = configureStore({
  reducer: {
    8862: 8862Reducer
  }
});

const meta: Meta<typeof 8862Interview> = {
  title: 'Forms/8862',
  component: 8862Interview,
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
      <8862Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8862Form printMode={true} />
    </Provider>
  ),
};
