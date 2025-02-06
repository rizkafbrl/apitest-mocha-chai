// test/api.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('endpoint reqres in', () => {
  it('should return a total of 12 users', (done) => {
    chai.request('https://reqres.in')
      .get('/api/users?page=2')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        // Verify that the response has status 200
        expect(res).to.have.status(200);

        // Verify the response is an object
        expect(res.body).to.be.an('object');

        // Verify that the total number of users is 12
        expect(res.body.total).to.equal(12);

        // Optionally, you can add more assertions here
        done();
      });
  });

  it('get single user id=2', (done) => {
    chai.request('https://reqres.in')
      .get('/api/users/2')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        // Verify that the response has status 200
        expect(res).to.have.status(200);

        // Verify the response is an object
        expect(res.body).to.be.an('object');
        console.log(res.body);
        // verify assertion id is 2
        expect(res.body.data.id).to.equal(2);

    
        done();
      });
  });

});
