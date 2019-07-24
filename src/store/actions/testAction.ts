import store from '../index';
import { TEST } from '../types';

let testAction = {
    letUsTest: function () {
        store.dispatch({ type: TEST });
    }
}

export default testAction;