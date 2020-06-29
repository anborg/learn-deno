import { format } from 'https://deno.land/x/date_fns/index.js';

interface Story{
    title: String;
    url: String;
    created_at_i: number;
}

interface FormattedStory{
    title: String;
    url: String;
    createdAt: String;
}

export const mapStory = (story: Story) : FormattedStory => ({
    title : story.title,
    url: story.url,
    createdAt: format(new Date(story.created_at_i * 1000), 'yyyy-MM-dd'),
});