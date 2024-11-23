import { TitleBar } from "@shopify/app-bridge-react";
import { Page, Layout } from "@shopify/polaris";

export default function ContractsPage() {
  return (
    <Page>
      <TitleBar title="Contracts page" />
      <Layout>
        <Layout.Section></Layout.Section>
      </Layout>
    </Page>
  );
}
