process.env.NODE_ENV = 'test';
import config from 'config';

process.env.API_BASE = config.get('v1_base_path');

import server from '../server';
import chai from 'chai';
import sinon from 'sinon';
const request = require("supertest")(server);
const expect = chai.expect;
const apiBase = process.env.API_BASE;
chai.use(require('chai-as-promised'));

export { request, chai, expect, sinon, config, apiBase }