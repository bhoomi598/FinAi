import {
  Html,
  Head,
  Body,
  Preview,
  Container,
  Heading,
  Text,
  Section,
} from "@react-email/components";
import * as React from "react";

export default function EmailTemplate({
  username = "User",
  type = "monthly-report",
  data = {},
}) {
  // ✅ Safe data handling
  const stats = data?.stats ?? {};

  const totalIncome = Number(stats.totalIncome ?? 0);
  const totalExpenses = Number(stats.totalExpenses ?? 0);
  const budgetAmount = Number(data?.budgetAmount ?? 0);
  const percentageUsed = Number(data?.percentageUsed ?? 0);

  const remaining = budgetAmount - totalExpenses;
  const net = totalIncome - totalExpenses;

  if (type === "monthly-report") {
    return (
      <Html>
        <Head />
        <Preview>Your Monthly Financial Report</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            <Heading style={styles.title}>Monthly Financial Report</Heading>

            <Text style={styles.text}>Hello {username},</Text>

            <Text style={styles.text}>
              Here’s your financial summary for {data?.month ?? "this month"}:
            </Text>

            <Section style={styles.statsContainer}>
              <Text style={styles.label}>Total Income</Text>
              <Text style={styles.value}>${totalIncome}</Text>

              <Text style={styles.label}>Total Expenses</Text>
              <Text style={styles.value}>${totalExpenses}</Text>

              <Text style={styles.label}>Net</Text>
              <Text style={styles.value}>${net}</Text>
            </Section>

            {stats.byCategory && (
              <Section style={styles.section}>
                <Heading style={styles.subHeading}>
                  Expenses by Category
                </Heading>

                {Object.entries(stats.byCategory).map(([category, amount]) => (
                  <div key={category} style={styles.row}>
                    <Text style={styles.text}>{category}</Text>
                    <Text style={styles.text}>${Number(amount)}</Text>
                  </div>
                ))}
              </Section>
            )}
          </Container>
        </Body>
      </Html>
    );
  }

  // if (type === "budget-alert") {
  //   return (
  //     <Html>
  //       <Head />
  //       <Preview>Budget Alert</Preview>
  //       <Body style={styles.body}>
  //         <Container style={styles.container}>
  //           <Heading style={styles.title}>Budget Alert</Heading>

  //           <Text style={styles.text}>Hello {username},</Text>

  //           <Text style={styles.text}>
  //             You’ve used {percentageUsed.toFixed(1)}% of your monthly budget.
  //           </Text>

  //           <Section style={styles.statsContainer}>
  //             <Text style={styles.label}>Budget Amount</Text>
  //             <Text style={styles.value}>${budgetAmount}</Text>

  //             <Text style={styles.label}>Spent So Far</Text>
  //             <Text style={styles.value}>${totalExpenses}</Text>

  //             <Text style={styles.label}>Remaining</Text>
  //             <Text style={styles.value}>${remaining}</Text>
  //           </Section>
  //         </Container>
  //       </Body>
  //     </Html>
  //   );
  // }
if (type === "budget-alert") {
  const totalExpenses = data?.totalExpenses ?? 0;
  const budgetAmount = data?.budgetAmount ?? 0;
  const percentageUsed = data?.percentageUsed ?? 0;

  const remaining = budgetAmount - totalExpenses;

  return (
    <Html>
      <Head />
      <Preview>Budget Alert</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Heading style={styles.title}>Budget Alert</Heading>

          <Text style={styles.text}>
            Hello {username},
          </Text>

          <Text style={styles.text}>
            You’ve used {percentageUsed.toFixed(1)}% of your monthly budget.
          </Text>

          <Section style={styles.statsContainer}>
            <Text style={styles.text}>Budget Amount</Text>
            <Text style={styles.heading}>${budgetAmount}</Text>

            <Text style={styles.text}>Spent So Far</Text>
            <Text style={styles.heading}>${totalExpenses}</Text>

            <Text style={styles.text}>Remaining</Text>
            <Text style={styles.heading}>${remaining}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
  return null;
}

const styles = {
  body: {
    backgroundColor: "#f6f9fc",
    fontFamily: "-apple-system, sans-serif",
  },
  container: {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "6px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  subHeading: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "15px",
  },
  label: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "4px",
  },
  value: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "15px",
  },
  text: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  section: {
    marginTop: "20px",
  },
  statsContainer: {
    margin: "20px 0",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },
};
