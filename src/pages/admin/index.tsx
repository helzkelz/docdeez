import React from 'react';
import Layout from '@theme/Layout';
import Editor from '@site/src/components/Editor/Editor';

export default function AdminPage() {
  return (
    <Layout title="Admin" description="Live Editor">
      <Editor />
    </Layout>
  );
}
