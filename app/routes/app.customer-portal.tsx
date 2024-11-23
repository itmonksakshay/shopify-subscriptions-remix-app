import { TitleBar } from "@shopify/app-bridge-react";
import { Page, Layout } from "@shopify/polaris";

export default function CustomerPortalPage() {
  return (
    <Page>
      <TitleBar title="Customer Portal Page" />
      <Layout>
        <Layout.Section></Layout.Section>
      </Layout>
    </Page>
  );
}