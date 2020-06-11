import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import { createWrapper } from './TestHelpers';

interface WelcomeComponentInterface {
    getScreenText(str: string): string,
  

}
jest.mock('@/utilities/idbUtility', () => {
    // const wrapper = createWrapper(WelcomeComponent, {
    //     //router
    //     mocks: {
    //         $router: [],
    //         $route:{"path":"/manageusers"}
    //     }
    // });
    return jest.fn().mockImplementation(() => {
        return { readAllData: () => { } }
    })
})
