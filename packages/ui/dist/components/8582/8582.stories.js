import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8582;
Interview;
from;
'./Interview';
8582;
Form;
from;
'./Form';
8582;
Reducer;
from;
'../../store/slices/8582Slice';
const store = configureStore({
    reducer: {
        8582: 8582, Reducer
    }
});
const meta;
8582;
Interview > ;
{
    title: 'Forms/8582',
        component;
    8582;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8582Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8582Form printMode=", true, " />"] })),
};
