import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
// import FavouriteProjects from "../components/FavouriteProjects";
// import LatestCode from "../components/LatestCode";


export default function Home() {
  return (
    <ContainerBlock
      title="Rob Hallam - Portfolio"
      description="Portfolio site for Rob Hallam"
    >
      {/* <div>
        <h1>Hello</h1>
      </div> */}
      <Hero/>
      {/* <Hero />
      <FavouriteProjects />
      <LatestCode /> */}
    </ContainerBlock>
      
  )
}
