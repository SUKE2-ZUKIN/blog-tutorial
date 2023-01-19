import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Posts from './posts';

export default {
  title: 'Components/Posts',
  component: Posts,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Posts>;

const Template: ComponentStory<typeof Posts> = (args) => <Posts {...args} />;

export const PostsComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PostsComponent.args = {
  posts: [{
    title: "タイトル",
    publish: "2023-01-19",
    slug: "/slug",
    eyecatch: {
      url: "/",
      blurDataURL: "/",
      width: 400,
      height: 300,
    },
    prevPost: {
      title: "Prev",
      slug: "prev",
    },
    nextPost: {
      title: "Next",
      slug: "next"
    }    
  }]
};
