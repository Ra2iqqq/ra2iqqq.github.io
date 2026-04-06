type FileOptions = {
  thumb?: string;
};

type FileOwner = {
  id?: string;
};

export const pb = {
  files: {
    getUrl: (_owner: FileOwner, file: string, _options?: FileOptions) => file,
  },
};
