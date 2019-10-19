import headerContent from '../site/headerComponent/header.html';
import styleForHeader from '../site/headerComponent/header.scss';

export class Header extends HTMLElement {

    constructor(document) {
        document.head.appendChild(styleForHeader);
    }

    render() {
        return headerContent;
    }

}