'use client';

import { Studio } from 'sanity';
import config from '../../../../sanity/clientConfig'


export default function AdminPage() {
  return <Studio config={config} />;
}
