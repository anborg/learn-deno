import { serve } from 'https://deno.land/std/http/server.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';

import {mapStory} from "./02_stories.ts"

const url = 'http://hn.algolia.com/api/v1/search?query=javascript';
const portNum = parseInt(config()['PORT'])
const server = serve({
    port: portNum
});
console.log("Deno App listening on "+portNum)
for await (const req of server) {
  const result = await fetch(url).then((result) => result.json());
  const stories = result.hits.map(mapStory);

  req.respond({ body: JSON.stringify(stories, null, 2) });
}