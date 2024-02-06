import type {NextPage} from 'next';

import { NewsPage } from '../components/news';
import {Layout} from '../components/layout/layout';

const News: NextPage = () => {
   return (
   <Layout>
      <NewsPage />
   </Layout>);
};

export default News;
