import { createClient } from 'next-sanity'
import config  from './clientConfig'

export const sanityClient = createClient(config)