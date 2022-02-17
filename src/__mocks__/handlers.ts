import { rest } from 'msw';

import image from './data/preview.png';
import sampleResponse from './data/bulbasaur.json';

export const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon/:name_or_id', (req, res, ctx) =>
    res(ctx.json(sampleResponse)),
  ),
  rest.get(
    'https://raw.githubusercontent.com/PokeAPI/sprites/**/*.png',
    async (req, res, ctx) => {
      const buffer = await fetch(image).then((response) =>
        response.arrayBuffer(),
      );

      return res(
        ctx.set('Content-Length', buffer.byteLength.toString()),
        ctx.set('Content-Type', 'image/jpg'),
        ctx.body(buffer),
      );
    },
  ),
];
