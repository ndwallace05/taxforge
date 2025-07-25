import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
944;
Interview;
from;
'./Interview';
944;
Form;
from;
'./Form';
944;
Reducer;
from;
'../../store/slices/944Slice';
const store = configureStore({
    reducer: {
        944: 944, Reducer
    }
});
const meta;
944;
Interview > ;
{
    title: 'Forms/944',
        component;
    944;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "944Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "944Form printMode=", true, " />"] })),
};
