import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 3520Interview from './Interview';
import 3520Form from './Form';
import 3520Reducer from '../../store/slices/3520Slice';

const store = configureStore({
  reducer: {
    3520: 3520Reducer
  }
});

const meta: Meta<typeof 3520Interview> = {
  title: 'Forms/3520',
  component: 3520Interview,
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
      <3520Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <3520Form printMode={true} />
    </Provider>
  ),
};
