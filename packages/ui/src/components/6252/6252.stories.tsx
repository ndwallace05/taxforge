import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 6252Interview from './Interview';
import 6252Form from './Form';
import 6252Reducer from '../../store/slices/6252Slice';

const store = configureStore({
  reducer: {
    6252: 6252Reducer
  }
});

const meta: Meta<typeof 6252Interview> = {
  title: 'Forms/6252',
  component: 6252Interview,
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
      <6252Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <6252Form printMode={true} />
    </Provider>
  ),
};
