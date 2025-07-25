import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
2210;
Interview;
from;
'./Interview';
2210;
Form;
from;
'./Form';
2210;
Reducer;
from;
'../../store/slices/2210Slice';
const store = configureStore({
    reducer: {
        2210: 2210, Reducer
    }
});
const meta;
2210;
Interview > ;
{
    title: 'Forms/2210',
        component;
    2210;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "2210Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "2210Form printMode=", true, " />"] })),
};
