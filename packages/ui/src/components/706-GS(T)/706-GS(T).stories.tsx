import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 706-GS(T)Interview from './Interview';
import 706-GS(T)Form from './Form';
import 706-gs(t)Reducer from '../../store/slices/706-gs(t)Slice';

const store = configureStore({
  reducer: {
    706-gs(t): 706-gs(t)Reducer
  }
});

const meta: Meta<typeof 706-GS(T)Interview> = {
  title: 'Forms/706-GS(T)',
  component: 706-GS(T)Interview,
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
      <706-GS(T)Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <706-GS(T)Form printMode={true} />
    </Provider>
  ),
};
