import React from 'react';
import { Layout } from 'layouts/index';
import { ContactView } from 'views/contact';

const ContactPage = () => {
  return (
    <Layout noFooter>
      <ContactView />
    </Layout>
  );
};

export default ContactPage;
