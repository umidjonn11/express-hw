const request = require('supertest');
const app = require("../index.js"); 

describe('GET /hello', () => {
  it('should return Hello, World!', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, World!');
  });
});

describe('POST /sum', () => {
  it('should return the correct sum', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ a: 3, b: 4 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(7);
  });

  it('should return 400 for invalid input', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ a: 'foo', b: 2 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});



// test("should return hello world", () => {
//   fetch("http://localhost:3030/hello")
//     .then((data) => data.text())
//     .then((data) => {
//       expect(data).toBe("Hello, World!");
//     });
// });

// test("should return sum", () => {
//   fetch("http://localhost:3030/sum", {
//     method: "POST",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify({
//       a: 1,
//       b: 90,
//     }),
//   })
//     .then((data) => data.json())
//     .then((res) => {
//       expect(res).toBe(91);
//     });
// });
