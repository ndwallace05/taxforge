import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
4684;
Interview;
from;
'./Interview';
4684;
Form;
from;
'./Form';
4684;
Reducer;
from;
'../../store/slices/4684Slice';
const store = configureStore({
    reducer: {
        4684: 4684, Reducer
    }
});
const meta;
4684;
Interview > ;
{
    title: 'Forms/4684',
        component;
    4684;
    Interview,
        decorators;
    [
        (Story) => (_jsx(Provider, { store: store, children: _jsx(Story, {}) })),
    ],
    ;
}
;
export default meta;
export const Interview = {
    args: {},
};
export const FormView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "4684Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "4684Form printMode=", true, " />"] })),
};
