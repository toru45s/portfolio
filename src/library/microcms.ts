//SDK利用準備
import { createClient } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

//型定義
export type Work = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  url: string;
  role: string;
  comment: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  pickup: boolean;
};

export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Work[];
};

//APIの呼び出し
export const getWorks = async () => {
  return await client.get<BlogResponse>({
    endpoint: "works",
    queries: { limit: 100 },
  });
};
