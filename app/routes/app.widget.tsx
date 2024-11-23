import { TitleBar } from "@shopify/app-bridge-react";
import { Page, Layout } from "@shopify/polaris";

export default function WidgetPage() {
  return (
    <Page>
      <TitleBar title="Widget page" />
      <Layout>
        <Layout.Section></Layout.Section>
      </Layout>
    </Page>
  );
}