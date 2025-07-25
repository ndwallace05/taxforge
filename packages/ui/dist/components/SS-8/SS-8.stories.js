import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var SS = ;
-8;
Interview;
from;
'./Interview';
-8;
Form;
from;
'./Form';
var ss = ;
-8;
Reducer;
from;
'../../store/slices/ss-8Slice';
const store = configureStore({
    reducer: {
        ss
    } - 8, ss
} - 8, Reducer);
;
const meta;
-8;
Interview > ;
{
    title: 'Forms/SS-8',
        component;
    SS - 8;
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("SS-8Form", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("SS-8Form", { printMode: true }) })),
};
