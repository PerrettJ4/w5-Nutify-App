const request = require('supertest');
const app = require('../app');
const { pool } = require('../db/index');
const deleteTable = require("../db/scripts/deleteTable");
const createTable = require("../db/scripts/createTable");
const populateTable = require("../db/scripts/populateTable");

afterAll(async () => {
    await pool.end();
});

beforeEach(async () => {
    await deleteTable();
    await createTable();
    await populateTable();
});

test('test GET /films', async () => {
    const response = await request(app).get('/films');
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual({
        success: true,
        message: 'Here are all the films',
        payload: expect.any(Array)
    });
    for(const film of response.body.payload) {
        expect(film).toStrictEqual({
            id: expect.any(Number),
            title: expect.any(String),
            imgurl: expect.any(String),
            description: expect.any(String),
            rating: expect.any(Number),
            actors: expect.any(String),
            year: expect.any(String),
            genre: expect.any(String)
        })
    }
});
