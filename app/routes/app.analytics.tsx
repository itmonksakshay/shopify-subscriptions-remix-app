import { TitleBar } from "@shopify/app-bridge-react";
import { Page, Layout } from "@shopify/polaris";

export default function AnalyticsPage() {
  return (
    <Page>
      <TitleBar title="Analytics page" />
      <Layout>
        <Layout.Section></Layout.Section>
      </Layout>
    </Page>
  );
}