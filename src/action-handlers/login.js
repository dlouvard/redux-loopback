import {loginPending, loginSuccess, loginError} from '../actions/login';

export default function loginHandler(app, store, action) {
    store.dispatch(loginPending());
    const loginDetails = action.payload;
    const modelName = action.meta.modelName;
    return app.models[modelName].login(loginDetails, (err, res) => {
        if (!err) {
            store.dispatch(loginSuccess(res));
        } else {
            store.dispatch(loginError(err));
        }
    });
}
