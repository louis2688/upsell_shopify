import {
  Page,
  Button,
  Layout,
  Card,
  EmptyState,
  Modal,
  Stack,
  TextField,
  Select,
  Pagination,
  ChoiceList,
  Avatar,
  ResourceItem,
  ResourceList,
  TextStyle,
  Caption,
  DropZone,
  Thumbnail,
} from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { NoteMinor } from "@shopify/polaris-icons";

export default function Index() {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [checked, setChecked] = useState(false);
  const toggleActive = useCallback(() => setActive((active) => !active), []);
  const toggleActive2 = useCallback(() => setActive2((active) => !active), []);
  const handleCheckbox = useCallback((value) => setChecked(value), []);
  const [value, setValue] = useState("");
  const handleChange = useCallback((newValue) => setValue(newValue), []);
  const handleChange2 = useCallback((value) => setSelected(value), []);
  const [selected, setSelected] = useState("today");
  const handleSelectChange = useCallback((value) => setSelected(value), []);
  const [selectedItem, setSelectedItem] = useState(["hidden"]);
  const activator = (
    <button
      style={{
        color: "white",
        background: "#6072e9",
        borderRadius: "12px",
        padding: "15px",
        border: "1px solid #6072e9",
      }}
      onClick={toggleActive}
    >
      Create Funnel
    </button>
  );
  const activator2 = (
    <button
      style={{
        color: "white",
        background: "#6072e9",
        borderRadius: "12px",
        padding: "15px",
        border: "1px solid #6072e9",
      }}
      onClick={toggleActive2}
    >
      Next
    </button>
  );

  const options = [
    { label: "Product", value: "product" },
    { label: "Collection", value: "collection" },
    { label: "All Product", value: "allProduct" },
  ];

  return (
    <div className="justify-center">
      <Page title="Funnel" fullWidth={false}>
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <EmptyState
                heading="Static Funnels"
                // activator={activator}
                image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                fullWidth
              >
                <p className="bt">
                  Oh no! You have no upsells yet! Get Started by creating your
                  first upsell
                </p>
              </EmptyState>
              <div
                style={{
                  height: "500px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Modal
                  large
                  activator={activator}
                  open={active}
                  onClose={toggleActive}
                  title="Add New Funnel"
                  primaryAction={{
                    content: "Next",
                    onAction: toggleActive,
                  }}
                  secondaryActions={[
                    {
                      content: "Cancel",
                      onAction: toggleActive,
                    },
                  ]}
                >
                  <Modal.Section>
                    <Stack vertical>
                      <TextField
                        label="Funnel Name"
                        value={value}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                      <Select
                        label="Trigger Type"
                        options={options}
                        onChange={handleSelectChange}
                        value={selected}
                      />
                    </Stack>
                  </Modal.Section>
                </Modal>
              </div>
            </Card>

            <div
              style={{
                height: "100px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                padding: "10px",
              }}
            >
              <Card sectioned>
                <Modal
                  large
                  activator={activator2}
                  open={active2}
                  onClose={toggleActive2}
                  title="Select Collection"
                  primaryAction={{
                    content: "Select",
                    onAction: toggleActive2,
                  }}
                  secondaryActions={[
                    {
                      content: "Cancel",
                      onAction: toggleActive2,
                    },
                  ]}
                >
                  <Modal.Section>
                    <Stack vertical>
                      <TextField
                        label="Select Collection"
                        value={value}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                      <ChoiceList
                        allowMultiple
                        title=""
                        choices={[
                          {
                            label: "Tshirt",
                            value: "tshirt",
                            helpText: "tshirt",
                          },
                          {
                            label: "Short",
                            value: "short",
                            helpText: "short",
                          },
                          {
                            label: "Sando",
                            value: "sando",
                            helpText: "sando",
                          },
                        ]}
                        selected={selectedItem}
                        onChange={handleChange2}
                      />
                    </Stack>
                  </Modal.Section>
                </Modal>
              </Card>
            </div>
          </Layout.Section>
        </Layout>

        <Layout>
            <Layout.Section>
              <Card title="Upsell Funnel" sectioned></Card>
            </Layout.Section>
            <Layout.Section secondary>
              <Card sectioned>
                <Button primary>Publish Funnel</Button>
              </Card>
            </Layout.Section>
        </Layout>

        <Layout>
          <Layout.Section>
          <div style={{ margin: "20px" }}>
            <Card style={{ margin: "10px" }}>
              <ResourceList
                resourceName={{ singular: "customer", plural: "customers" }}
                items={[
                  {
                    id: 110,
                    url: "customers/341",
                    name: "Trigger Product 1",
                    location: "Decatur, USA",
                    latestOrderUrl: "orders/1456",
                  },
                ]}
                renderItem={(item) => {
                  const { id, url, name, location, latestOrderUrl } = item;
                  const media = <Avatar customer size="medium" name={name} />;
                  const shortcutActions = latestOrderUrl
                    ? [
                        {
                          content: "Edit Product",
                          accessibilityLabel: `View ${name}’s latest order`,
                          url: latestOrderUrl,
                        },
                      ]
                    : null;

                  return (
                    <ResourceItem
                      id={id}
                      url={url}
                      media={media}
                      accessibilityLabel={`View details for ${name}`}
                      shortcutActions={shortcutActions}
                      persistActions
                    >
                      <h3>
                        <TextStyle variation="strong">{name}</TextStyle>
                      </h3>
                    </ResourceItem>
                  );
                }}
              />
            </Card>
            </div>
          </Layout.Section>
        </Layout>

        <Layout>
          <Layout.Section>
            <div style={{ margin: "20px" }}>
              <Card sectioned>
                <ResourceList
                  resourceName={{ singular: "customer", plural: "customers" }}
                  items={[
                    {
                      id: 210,
                      url: "customers/256",
                      name: "Shopping Cart",
                      location: "Los Angeles, USA",
                      latestOrderUrl: "orders/1457",
                    },
                  ]}
                  renderItem={(item) => {
                    const { id, url, name, location, latestOrderUrl } = item;
                    const media = <Avatar customer size="medium" name={name} />;
                    const shortcutActions = latestOrderUrl
                      ? [
                          {
                            content: "Change Location",
                            accessibilityLabel: `View ${name}’s latest order`,
                            url: latestOrderUrl,
                          },
                        ]
                      : null;

                    return (
                      <ResourceItem
                        id={id}
                        url={url}
                        media={media}
                        accessibilityLabel={`View details for ${name}`}
                        shortcutActions={shortcutActions}
                        persistActions
                      >
                        <h3>
                          <TextStyle variation="strong">{name}</TextStyle>
                        </h3>
                      </ResourceItem>
                    );
                  }}
                />
              </Card>
            </div>
          </Layout.Section>
        </Layout>

        <div style={{ margin: "20px" }}>
          <Layout>
            <Layout.Section>
              <Card>
                <Card.Section title="Pre Purchase Upsell Offer">
                  <div
                    style={{
                      height: "70px",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <button
                      style={{
                        color: "white",
                        background: "#6072e9",
                        borderRadius: "12px",
                        padding: "15px",
                        border: "1px solid #6072e9",
                      }}
                      onClick={toggleActive}
                    >
                      Choose Product
                    </button>
                  </div>
                </Card.Section>
              </Card>
            </Layout.Section>
          </Layout>
        </div>

        <Layout>
          <Layout.Section>
            <div style={{ margin: "20px" }}>
              <Card>
                <ResourceList
                  resourceName={{ singular: "customer", plural: "customers" }}
                  items={[
                    {
                      id: 110,
                      url: "customers/341",
                      name: "Checkout",
                      location: "Decatur, USA",
                      latestOrderUrl: "orders/1456",
                    },
                  ]}
                  renderItem={(item) => {
                    const { id, url, name, location, latestOrderUrl } = item;
                    const media = <Avatar customer size="medium" name={name} />;
                    const shortcutActions = latestOrderUrl
                      ? [
                          {
                            content: "",
                            accessibilityLabel: `View ${name}’s latest order`,
                            url: latestOrderUrl,
                          },
                        ]
                      : null;

                    return (
                      <ResourceItem
                        id={id}
                        url={url}
                        media={media}
                        accessibilityLabel={`View details for ${name}`}
                        shortcutActions={shortcutActions}
                        persistActions
                      >
                        <h3>
                          <TextStyle variation="strong">{name}</TextStyle>
                        </h3>
                      </ResourceItem>
                    );
                  }}
                />
              </Card>
            </div>
          </Layout.Section>
        </Layout>

        <Layout>
          <Layout.Section>
            <div style={{ margin: "20px" }}>
              <Card>
                <Card.Section title="Post Purchase Upsell Offer #1">
                  <div
                    style={{
                      height: "70px",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <button
                      style={{
                        color: "white",
                        background: "#6072e9",
                        borderRadius: "12px",
                        padding: "15px",
                        border: "1px solid #6072e9",
                      }}
                      onClick={toggleActive}
                    >
                      Choose Product
                    </button>
                  </div>
                </Card.Section>
              </Card>
            </div>
          </Layout.Section>
        </Layout>

        <Layout>
          <Layout.Section>
            <div style={{ margin: "20px" }}>
              <Card>
                <Card.Section title="Post Purchase Downsell Offer">
                  <div
                    style={{
                      height: "70px",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <button
                      style={{
                        color: "white",
                        background: "#6072e9",
                        borderRadius: "12px",
                        padding: "15px",
                        border: "1px solid #6072e9",
                      }}
                      onClick={toggleActive}
                    >
                      Choose Product
                    </button>
                  </div>
                </Card.Section>
              </Card>
            </div>
          </Layout.Section>
        </Layout>

        <Layout>
          <Layout.Section>
            <div style={{ margin: "20px" }}>
              <Card>
                <Card.Section title="Post Purchase Upsell Offer #2">
                  <div
                    style={{
                      height: "70px",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <button
                      style={{
                        color: "white",
                        background: "#6072e9",
                        borderRadius: "12px",
                        padding: "15px",
                        border: "1px solid #6072e9",
                      }}
                      onClick={toggleActive}
                    >
                      Choose Product
                    </button>
                  </div>
                </Card.Section>
              </Card>
            </div>
          </Layout.Section>
        </Layout>

        <Layout>
          <Layout.Section>
            <div style={{ margin: "20px" }}>
              <Card>
                <ResourceList
                  resourceName={{ singular: "customer", plural: "customers" }}
                  items={[
                    {
                      id: 110,
                      url: "customers/341",
                      name: "Thank You Page",
                      location: "Decatur, USA",
                      latestOrderUrl: "orders/1456",
                    },
                  ]}
                  renderItem={(item) => {
                    const { id, url, name, location, latestOrderUrl } = item;
                    const media = <Avatar customer size="medium" name={name} />;
                    const shortcutActions = latestOrderUrl
                      ? [
                          {
                            content: "",
                            accessibilityLabel: `View ${name}’s latest order`,
                            url: latestOrderUrl,
                          },
                        ]
                      : null;

                    return (
                      <ResourceItem
                        id={id}
                        url={url}
                        media={media}
                        accessibilityLabel={`View details for ${name}`}
                        shortcutActions={shortcutActions}
                        persistActions
                      >
                        <h3>
                          <TextStyle variation="strong">{name}</TextStyle>
                        </h3>
                      </ResourceItem>
                    );
                  }}
                />
              </Card>
            </div>
          </Layout.Section>
        </Layout>

        <Layout>
          <Layout.Section>
            <div style={{ margin: "20px" }}>
              <Card>
                <Card.Section title="Thank you page offer">
                  <div
                    style={{
                      height: "70px",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <button
                      style={{
                        color: "white",
                        background: "#6072e9",
                        borderRadius: "12px",
                        padding: "15px",
                        border: "1px solid #6072e9",
                      }}
                      onClick={toggleActive}
                    >
                      Choose Product
                    </button>
                  </div>
                </Card.Section>
              </Card>
            </div>
          </Layout.Section>
        </Layout>
      </Page>
    </div>
  );
}
