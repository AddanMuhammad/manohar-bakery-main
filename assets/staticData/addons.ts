import SparklingJuice from '@/assets/images/addons/sparkling_juice.png';
import KrazyStrings from '@/assets/images/addons/crazy_strings.png';
import BloomingCandles from '@/assets/images/addons/blooming_candles.png';
import FountainsSparkling from '@/assets/images/addons/fountain_sparkling.png';
import HeliumBallons from '@/assets/images/addons/hellium_balloons.png';
import PartyPoppers from '@/assets/images/addons/party_popper.png';
import NumberCandles from '@/assets/images/addons/number_candles.png';
import Candles from '@/assets/images/addons/candles.png';
import { Addon } from '@/types';

export const Addons: Addon[] = [
  {
    id: '1',
    name: 'Organic Sparkling Juice',
    image: SparklingJuice.src,
    price: '1.00',
    isAvailable: true,
  },
  {
    id: '2',
    name: 'Crazy Strings',
    image: KrazyStrings.src,
    price: '1.00',
    isAvailable: true,
  },
  {
    id: '3',
    name: 'Blooming Candles',
    image: BloomingCandles.src,
    price: '1.00',
    isAvailable: true,
  },
  {
    id: '4',
    name: 'Number Candles',
    image: NumberCandles.src,
    price: '1.00',
    isAvailable: true,
  },
  {
    id: '5',
    name: 'Candles',
    image: Candles.src,
    price: '1.00',
    isAvailable: true,
  },
  {
    id: '6',
    name: 'Cake Fountain Sparkling',
    image: FountainsSparkling.src,
    price: '1.00',
    isAvailable: true,
  },
  {
    id: '7',
    name: 'Helium Ballons',
    image: HeliumBallons.src,
    price: '1.00',
    isAvailable: true,
  },
  {
    id: '8',
    name: 'Party Poppers',
    image: PartyPoppers.src,
    price: '1.00',
    isAvailable: true,
  },
];