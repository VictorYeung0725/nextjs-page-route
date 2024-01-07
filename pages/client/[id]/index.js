import { useRouter } from 'next/router';
function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    //all sort of action load data ...
    // router.push('/client/max/projecta');
    // router.push({
    //   pathname: '/client/[id]/[clientProjectId]',
    //   query: { id: 'max', clientProjectId: 'projecta' },
    // });

    //replace the current Url, we cant go back after the navigation
    router.replace('/client/victor/projecta');
  }
  return (
    <div>
      <h1>The Project of a given Client</h1>

      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectPage;
