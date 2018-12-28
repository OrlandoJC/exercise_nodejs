let chai = require("chai"),
    chaiHttp = require("chai-http"),
    expect = require("chai").expect,
    should = chai.should();
    
const url = "http://localhost:3000";

chai.use(chaiHttp);

describe("get authenticated : ", () => {
  it("should get authenticated ", done => {
    chai
      .request(url)
      .get("/user")
      .set("Authorization", "true")
      .end(function(err, res) {
        res.should.have.status(200);
        res.body.should.have.property("info").eql("permitido");
        done();
      });
  });
});
