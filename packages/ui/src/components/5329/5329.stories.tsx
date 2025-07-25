import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 5329Interview from './Interview';
import 5329Form from './Form';
import 5329Reducer from '../../store/slices/5329Slice';

const store = configureStore({
  reducer: {
    5329: 5329Reducer
  }
});

const meta: Meta<typeof 5329Interview> = {
  title: 'Forms/5329',
  component: 5329Interview,
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
      <5329Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <5329Form printMode={true} />
    </Provider>
  ),
};
