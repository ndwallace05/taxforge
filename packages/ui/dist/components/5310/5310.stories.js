import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
5310;
Interview;
from;
'./Interview';
5310;
Form;
from;
'./Form';
5310;
Reducer;
from;
'../../store/slices/5310Slice';
const store = configureStore({
    reducer: {
        5310: 5310, Reducer
    }
});
const meta;
5310;
Interview > ;
{
    title: 'Forms/5310',
        component;
    5310;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5310Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5310Form printMode=", true, " />"] })),
};
