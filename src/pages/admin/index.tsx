import { Button, Table } from 'antd';
import { format } from 'date-fns';
import Link from 'next/link';
import React from 'react';
import useAllPosts from '../../hooks/useAllPosts';
import auth0 from '../../lib/initAuth0';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    width: 350,
  },
  {
    title: 'Last Modified',
    dataIndex: '_ts',
    key: '_ts',
    render: timestamp => {
      return format(timestamp / 1000, 'MM/dd/yyyy H:mm:ss');
    },
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (_x, post) => (
      <span>
        <Link href={`/admin/edit-post/${post.slug}`}>
          <a>Edit</a>
        </Link>
        <a>Delete</a>
      </span>
    ),
  },
];

export default function AdminDashboard() {
  const { data: posts, error } = useAllPosts({});

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div className="container mx-auto m-8 p-8">
      <Button href="/admin/add-post" size="large" className="mb-8">
        Add Post
      </Button>
      <Table
        loading={!posts}
        size="small"
        dataSource={posts}
        columns={columns}
      />
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const session = await auth0.getSession(req);
  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/',
    });
    res.end();
    return;
  }
  return { props: { user: session.user } };
};
