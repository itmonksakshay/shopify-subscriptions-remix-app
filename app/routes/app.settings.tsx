import { TitleBar } from "@shopify/app-bridge-react";
import { Page, Layout } from "@shopify/polaris";

export default function SettingsPage() {
  return (
    <Page>
      <TitleBar title="Settings page" />
      <Layout>
        <Layout.Section>
            <h2>Hello Settings</h2>
        </Layout.Section>
      </Layout>
    </Page>
  );
}