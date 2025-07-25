export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
    form1040: unknown;
    form1040SR: unknown;
    form1040NR: unknown;
}, import("@reduxjs/toolkit").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("@reduxjs/toolkit").ThunkMiddleware<{
    form1040: unknown;
    form1040SR: unknown;
    form1040NR: unknown;
}, import("@reduxjs/toolkit").AnyAction>]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { useAppDispatch, useAppSelector } from './hooks';
export default store;
//# sourceMappingURL=index.d.ts.map