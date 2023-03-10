import { BRAND_IDENTITY, LOGO_DESIGN, SOCIAL_MARKETING, WEB_DEVELOPMENT } from "./Labels";
import img1 from '../images/portfolio-img1.jpg';
import img2 from '../images/portfolio-img2.jpg';
import img3 from '../images/portfolio-img3.jpg';
import img4 from '../images/portfolio-img4.jpg';
import img5 from '../images/portfolio-img5.jpg';
import img6 from '../images/portfolio-img6.jpg';

const DUMMY_DESCRIPTION = "Description goes here";

export const PROJECT_1 = {
    id: 1,
    name: "Project 1",
    label: BRAND_IDENTITY,
    description: DUMMY_DESCRIPTION,
    img: {
        src: img1
    }
}

export const PROJECT_2 = {
    id: 2,
    name: "Project 2",
    label: WEB_DEVELOPMENT,
    description: DUMMY_DESCRIPTION,
    img: {
        src: img2
    }
}

export const PROJECT_3 = {
    id: 3,
    name: "Project 3",
    label: SOCIAL_MARKETING,
    description: DUMMY_DESCRIPTION,
    img: {
        src: img3
    }
}

export const PROJECT_4 = {
    id: 4,
    name: "Project 4",
    label: LOGO_DESIGN,
    description: DUMMY_DESCRIPTION,
    img: {
        src: img4
    }
}

export const PROJECT_5 = {
    id: 5,
    name: "Project 5",
    label: BRAND_IDENTITY,
    description: DUMMY_DESCRIPTION,
    img: {
        src: img5
    }
}

export const PROJECT_6 = {
    id: 6,
    name: "Project 6",
    label: WEB_DEVELOPMENT,
    description: DUMMY_DESCRIPTION,
    img: {
        src: img6
    }
}

export const PROJECT_LIST = [
    PROJECT_1,
    PROJECT_2,
    PROJECT_3,
    PROJECT_4,
    PROJECT_5,
    PROJECT_6,
];
