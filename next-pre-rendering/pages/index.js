import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Next JS pre-rendering</h1>
      <div>
        <Link href="/users">
          <a>Users</a>
        </Link>
      </div>
      <div>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </div>
      <div>
        <Link href="/events">
          <a>Events</a>
        </Link>
      </div>
      <div>
        <Link href="/products">
          <a>Products</a>
        </Link>
      </div>
      <div>
        <Link href="/news">
          <a>News</a>
        </Link>
      </div>
      <div>
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
      </div>
      <div>
        <Link href="/dashboard-swr">
          <a>Dashboard-SWR</a>
        </Link>
      </div>
    </>
  );
}

export default Home;
