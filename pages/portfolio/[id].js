import { useRouter } from 'next/router';

function PortfolioPorjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  //send a request to some backend server
  // to fetch the piece of data with the id of router.query.id

  return (
    <div>
      <h1>PortfolioPorjectPage</h1>
    </div>
  );
}

export default PortfolioPorjectPage;
