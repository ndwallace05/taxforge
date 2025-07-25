import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 5695Interview from './Interview';
import 5695Form from './Form';
import 5695Reducer from '../../store/slices/5695Slice';

const store = configureStore({
  reducer: {
    5695: 5695Reducer
  }
});

const meta: Meta<typeof 5695Interview> = {
  title: 'Forms/5695',
  component: 5695Interview,
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
      <5695Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <5695Form printMode={true} />
    </Provider>
  ),
};
