import {Bucket, Folder} from './domain';
import {SqlHighlighter} from '@mikro-orm/sql-highlighter';
import {Options} from '@mikro-orm/core';

export default {
  entities: [ Bucket, Folder ],
  discovery: { disableDynamicFileAccess: true },
  type: 'postgresql',
  dbName: 'nestjs-fastify-mikro-orm',
  host: 'localhost',
  port: 5432,
  user: 'nestjs-fastify-mikro-orm',
  password: 'password',
  highlighter: new SqlHighlighter(),
} as Options;
