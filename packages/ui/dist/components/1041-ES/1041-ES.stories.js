import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1041 - ESInterview;
from;
'./Interview';
1041 - ESForm;
from;
'./Form';
1041 - esReducer;
from;
'../../store/slices/1041-esSlice';
const store = configureStore({
    reducer: {
        1041: -es, 1041: -esReducer
    }
});
const meta;
1041 - ESInterview > ;
{
    title: 'Forms/1041-ES',
        component;
    1041 - ESInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1041-ESForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1041-ESForm printMode=", true, " />"] })),
};
