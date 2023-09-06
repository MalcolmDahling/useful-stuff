export type Category = 'library' | 'git' | 'css' | 'vscode' | 'link' | 'misc';

export type Data = {
  name: string;
  content: {
    category?: string;
    link?: string;
    text?: any;
    commands?: any;
  };
};

export type StoryblokCategory = {
  name: Category;
  data: Data[];
};
