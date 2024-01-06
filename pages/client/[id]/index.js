import { useRouter } from 'next/router';
function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);

  function 
  return (
    <div>
      <h1>The Project of a given Client</h1>

      <button>Load Project A</button>
    </div>
  );
}

export default ClientProjectPage;
