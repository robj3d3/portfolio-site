import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import userData from "../constants/data";
import getLatestRepos from "../lib/getLatestRepos";
// import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";


export default function Home({ repositories }: { [x:string]: any }) {
  return (
    <ContainerBlock
      title="Rob Hallam - Portfolio"
      description="Portfolio site for Rob Hallam"
    >
      {/* <div>
        <h1>Hello</h1>
      </div> */}
      <Hero/>
      <LatestCode repositories={ repositories } />
    </ContainerBlock>
      
  )
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
}