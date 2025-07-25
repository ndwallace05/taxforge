import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
2120;
Interview;
from;
'./Interview';
2120;
Form;
from;
'./Form';
2120;
Reducer;
from;
'../../store/slices/2120Slice';
const store = configureStore({
    reducer: {
        2120: 2120, Reducer
    }
});
const meta;
2120;
Interview > ;
{
    title: 'Forms/2120',
        component;
    2120;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "2120Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "2120Form printMode=", true, " />"] })),
};
