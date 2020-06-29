import {assertEquals} from 'https://deno.land/std/testing/asserts.ts';
import { mapStory } from './01_stories.js';

Deno.test("map_story_with_dateformat",() => {
    const stories = [
        {
          id: '1',
          title: 'title1',
          url: 'url1',
          created_at_i: 1476198038,
        },
    ];
    const expectedStories = [
      {
        title: 'title1',
        url: 'url1',
        createdAt: '2016-10-11',
      },
    ];
    assertEquals(stories.map(mapStory), expectedStories);
} );