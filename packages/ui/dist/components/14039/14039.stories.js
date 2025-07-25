import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
14039;
Interview;
from;
'./Interview';
14039;
Form;
from;
'./Form';
14039;
Reducer;
from;
'../../store/slices/14039Slice';
const store = configureStore({
    reducer: {
        14039: 14039, Reducer
    }
});
const meta;
14039;
Interview > ;
{
    title: 'Forms/14039',
        component;
    14039;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "14039Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "14039Form printMode=", true, " />"] })),
};
