import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1116;
Interview;
from;
'./Interview';
1116;
Form;
from;
'./Form';
1116;
Reducer;
from;
'../../store/slices/1116Slice';
const store = configureStore({
    reducer: {
        1116: 1116, Reducer
    }
});
const meta;
1116;
Interview > ;
{
    title: 'Forms/1116',
        component;
    1116;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1116Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1116Form printMode=", true, " />"] })),
};
