import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
5307;
Interview;
from;
'./Interview';
5307;
Form;
from;
'./Form';
5307;
Reducer;
from;
'../../store/slices/5307Slice';
const store = configureStore({
    reducer: {
        5307: 5307, Reducer
    }
});
const meta;
5307;
Interview > ;
{
    title: 'Forms/5307',
        component;
    5307;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5307Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5307Form printMode=", true, " />"] })),
};
