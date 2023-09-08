import { SelectedPage } from '@/atoms/SelectedPage';
import CardContainer from '@/components/CardContainer/CardContainer';
import Search from '@/components/Search/Search';
import { StoryblokCategory } from '@/models/storyblokCategories';
import { apiPlugin, getStoryblokApi, storyblokInit } from '@storyblok/react';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

export async function getStaticProps() {
  storyblokInit({
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    use: [apiPlugin],
    apiOptions: {
      cache: {
        clear: 'auto',
        type: 'memory',
      },
    },
  });

  const storyblokCDA = getStoryblokApi();

  const categories: StoryblokCategory[] = [
    { name: 'library', data: [] },
    { name: 'git', data: [] },
    { name: 'css', data: [] },
    { name: 'vscode', data: [] },
    { name: 'link', data: [] },
    { name: 'misc', data: [] },
  ];

  for (let i = 0; i < categories.length; i++) {
    const res = await storyblokCDA.get('cdn/stories', {
      starts_with: `items/${categories[i].name}`,
      per_page: 100,
      sort_by: 'name:asc',
    });

    res.data.stories.forEach((story: any) => {
      if (story) {
        categories[i].data.push(story);
      }
    });
  }

  return {
    props: {
      categories: categories,
    },
    revalidate: 600,
  };
}

type props = {
  categories: StoryblokCategory[];
};

export default function Index(props: props) {
  const selectedPage = useRecoilValue(SelectedPage);
  const [searchInput, setSearchInput] = useState('');

  function search(input: string) {
    setSearchInput(input.toLowerCase());
  }

  return (
    <>
      <Search search={(input: string) => search(input)}></Search>
      <CardContainer
        search={searchInput}
        category={props.categories[selectedPage]}
      ></CardContainer>
    </>
  );
}
