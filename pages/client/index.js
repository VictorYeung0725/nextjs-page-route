//list all the client
import Link from 'next/link';
function ClientPage() {
  const client = [
    {
      id: 'max',
      name: 'maximilim',
    },
    {
      id: 'victor',
      name: 'victor yeung',
    },
    {
      id: 'jack',
      name: 'jack leung',
    },
  ];
  return (
    <div>
      <h1>Client Page</h1>

      <ul>
        {client.map((cl) => {
          return (
            <li key={cl.id}>
              {/* <Link href={`/client/${cl.id}`}>{cl.name}</Link> */}
              {/* another ways to replace href in Link component provided by next.js  */}
              <Link href={{ pathname: '/client/[id]', query: { id: cl.id } }}>
                {cl.name}
              </Link>
            </li>
          );
        })}
        {/* <li>
          <Link href='/client/victor'>victor</Link>
        </li>
        <li>
          <Link href='/client/maximu'>maximu</Link>
        </li> */}
      </ul>
    </div>
  );
}

export default ClientPage;
