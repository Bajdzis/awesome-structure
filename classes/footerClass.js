import footerContent from '../site/footerComponent/footer.html';
import styleForFooter from '../site/footerComponent/footer.scss';

export class Footer extends HTMLElement {

    constructor(document) {
        document.head.appendChild(styleForFooter);
    }

    render() {
        return footerContent;
    }

}