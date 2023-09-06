export type Category = 'library' | 'git' | 'css' | 'vscode' | 'link' | 'misc';

export type Data = {
  name: string;
  content: {
    category?: string;
    link?: string;
    text?: any;
    command?: string;
  };
};

export type StoryblokCategory = {
  name: Category;
  data: Data[];
};
