import { Button } from "react-bootstrap";

function Home_Btns() {
  return (
    <div>
      <Button variant="warning" size="lg" className="btn">
        <a href="/convert">Start Converting</a>
      </Button>
      <br></br>
      <Button variant="danger" size="lg" className="btn-2">
        <a href="/about">About SpotiFibe</a>
      </Button>
    </div>
  );
}

export default Home_Btns;
