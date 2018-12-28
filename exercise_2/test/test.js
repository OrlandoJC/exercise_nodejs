let chai = require("chai"),
  chaiHttp = require("chai-http"),
  should = chai.should();

const url = "http://localhost:3000";

chai.use(chaiHttp);

describe("get user: ", () => {
  it("should get user", done => {
    chai
      .request(url)
      .get("/user")
      .end(function(err, res) {
        res.should.have.status(200);
        res.body.should.have.property("msg").eql("Endpoint get User");
        done();
      });
  });
});

describe("post user: ", () => {
  it("should post user", done => {
    let objPost = {
      name: "orlando",
      mail: "cuximyamaorlandodejesus@gmail.com",
      id: "1232",
      pass: "2kdp3djidjeij"
    };
    chai
      .request(url)
      .post("/user")
      .send(objPost)
      .end(function(err, res) {
        res.should.have.status(200);
        res.body.should.have.property("info").eql(objPost);
        done();
      });
  });
});
