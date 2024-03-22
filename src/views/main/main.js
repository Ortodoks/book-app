import { AbstractView } from "../../common/view.js"
import { Header } from "../../components/header/header.js";
import onChange from "on-change";


export class MainView extends AbstractView {
    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0
    };
    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this))
        this.setTitle('Поиск книг');
    }

    appStateHook(path) {
        if (path === 'favorites') {
            console.log(path);
        }

    }

    render() {
        const main = document.createElement('div');
        this.App.innerHTML = '';
        this.App.append(main);
        this.renderHeader()
        this.appState.favorites.push('d');
    }

    renderHeader() {
        const header = new Header(this.appState).render(); 
        this.App.prepend(header)
    }
}