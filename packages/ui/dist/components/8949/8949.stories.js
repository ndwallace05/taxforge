import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8949;
Interview;
from;
'./Interview';
8949;
Form;
from;
'./Form';
8949;
Reducer;
from;
'../../store/slices/8949Slice';
const store = configureStore({
    reducer: {
        8949: 8949, Reducer
    }
});
const meta;
8949;
Interview > ;
{
    title: 'Forms/8949',
        component;
    8949;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8949Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8949Form printMode=", true, " />"] })),
};
