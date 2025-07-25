import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
4952;
Interview;
from;
'./Interview';
4952;
Form;
from;
'./Form';
4952;
Reducer;
from;
'../../store/slices/4952Slice';
const store = configureStore({
    reducer: {
        4952: 4952, Reducer
    }
});
const meta;
4952;
Interview > ;
{
    title: 'Forms/4952',
        component;
    4952;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "4952Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "4952Form printMode=", true, " />"] })),
};
