export class AbstractView {
    constructor() {
        this.App = document.getElementById('root');
    } 

    setTitle(title) {
        document.title = title;
    }

    render() {
        return;
    }

    destroy() {
        return;
    }
}