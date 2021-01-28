import store from './store';
import {bugAdded, bugRemoved, bugResolved} from './actions';
const unsubscribe = store.subscribe(()=> {
    console.log("Store has changed", store.getState())
})
store.dispatch(bugAdded("Bug 1"));
unsubscribe();
store.dispatch(bugResolved(1))
function helloWorld(string) {
    return {
        string : [string]
    }
}


console.log(helloWorld("helloworld"))
console.log(store.getState())
