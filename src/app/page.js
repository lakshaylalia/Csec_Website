import Leaderboard from "../components/Carousel_Custom";
import Events from "../components/Events";
import Landing from "./landing/page"
import About from '../app/about-us/page'
export default function Home() {
  return (
    <>
      <Landing/>
      <Events/>
      <About/>
      <Leaderboard/>
    </>

  );
}
