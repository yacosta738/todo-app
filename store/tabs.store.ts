import {defineStore} from 'pinia';
import {Tab} from "~/model/tab.model";


type IStore = {
    tabs: Tab[],
    activeTab: Tab,
}

export const useTabsStore = defineStore(
    {
        id: 'tabsStore',
        state: (): IStore => ({
            tabs: [
                Tab.All,
                Tab.Active,
                Tab.Completed
            ],
            activeTab: Tab.All
        }),
        getters: {
            getTabs: (state: IStore) => state.tabs,
            getActiveTab: (state: IStore) => state.activeTab,
        },
        actions: {
            setActiveTab(tab: Tab) {
                this.activeTab = tab;
                // save to local storage
                localStorage.setItem('activeTab', tab.toString());
            },
            readActiveTab() {
                const activeTab = localStorage.getItem('activeTab');
                if (activeTab) {
                    this.activeTab = Tab[activeTab];
                } else {
                    this.activeTab = Tab.All;
                }
            }
        }
    }
);