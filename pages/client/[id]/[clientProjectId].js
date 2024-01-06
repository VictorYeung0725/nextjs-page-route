import { useRouter } from 'next/router';
function selectedClientPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The selected Client project page</h1>
    </div>
  );
}

export default selectedClientPage;
