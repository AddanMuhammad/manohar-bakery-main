import StrawberryDonut from '@/assets/images/donut.png';
import ChocolateDonut from '@/assets/images/cake.png';
import VanillaDonut from '@/assets/images/donut.png';
import CaramelDonut from '@/assets/images/cake.png';
import MapleDonut from '@/assets/images/donut.png';
import { HeroSectionItem } from '@/types';


export const heroSectionData: HeroSectionItem[] = [
    {
        id: '1',
        title: 'Strawberry',
        heading: 'Strawberry Donut',
        description: 'Bursting with fruity flavor, this donut features vibrant pink strawberry frosting and is generously adorned with rainbow sprinkles for a fun, sugary delight',
        image: StrawberryDonut.src,
    },
    {
        id: '2',
        title: 'Chocolate',
        heading: 'Chocolate Donut',
        description: 'Rich and decadent, this chocolate donut is smothered in smooth chocolate frosting and is drizzled with a sweet chocolate drizzle for a truly indulgent treat',
        image: ChocolateDonut.src,
    },
    {
        id: '3',
        title: 'Vanilla',
        heading: 'Vanilla Donut',
        description: 'Creamy and sweet, this vanilla donut is topped with a sweet vanilla frosting and is sprinkled with a sweet vanilla sprinkle for a sweet, sugary delight',
        image: VanillaDonut.src,
    },
    {
        id: '4',
        title: 'Caramel',
        heading: 'Caramel Donut',
        description: 'Caramel and sweet, this caramel donut is topped with a sweet caramel frosting and is sprinkled with a sweet caramel sprinkle for a sweet, sugary delight',
        image: CaramelDonut.src,
    },
]