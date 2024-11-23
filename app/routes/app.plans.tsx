import { TitleBar } from "@shopify/app-bridge-react";
import { Page, Layout } from "@shopify/polaris";

export default function PlansPage() {
  return (
    <Page>
      <TitleBar title="Plans page" />
      <Layout>
        <Layout.Section></Layout.Section>
      </Layout>
    </Page>
  );
}
