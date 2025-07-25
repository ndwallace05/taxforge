import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var W = ;
-2;
GInterview;
from;
'./Interview';
-2;
GForm;
from;
'./Form';
var w = ;
-2;
gReducer;
from;
'../../store/slices/w-2gSlice';
const store = configureStore({
    reducer: {
        w
    } - 2, g: w - 2, gReducer
});
;
const meta;
-2;
GInterview > ;
{
    title: 'Forms/W-2G',
        component;
    W - 2;
    GInterview,
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("W-2GForm", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("W-2GForm", { printMode: true }) })),
};
