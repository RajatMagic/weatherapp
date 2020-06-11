import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import { createWrapper } from './TestHelpers';
import WelcomeComponent from '@/components/welcomecomponent/WelcomeComponent.vue';

interface WelcomeComponentInterface {
    getScreenText(str: string): string,
  

}
jest.mock('@/utilities/idbUtility', () => {
    return jest.fn().mockImplementation(() => {
        return { readAllData: () => { } }
    })
})
