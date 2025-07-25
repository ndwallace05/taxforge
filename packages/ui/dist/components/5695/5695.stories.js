import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
5695;
Interview;
from;
'./Interview';
5695;
Form;
from;
'./Form';
5695;
Reducer;
from;
'../../store/slices/5695Slice';
const store = configureStore({
    reducer: {
        5695: 5695, Reducer
    }
});
const meta;
5695;
Interview > ;
{
    title: 'Forms/5695',
        component;
    5695;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5695Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5695Form printMode=", true, " />"] })),
};
