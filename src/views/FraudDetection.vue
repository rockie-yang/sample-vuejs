<template>
  <div>
    <b-card>
      <b-container>
        <b-row class="justify-content-md-center">
          <b-col md="10">
            <h4>Fraud Detection</h4>
            <p>
              Fraud occurs when an individual or group of individuals, or a
              business entity intentionally deceives another individual or
              business entity with misrepresentation of identity, products,
              services, or financial transactions and/or false promises with no
              intention of fulfilling them.
            </p>

            <p>
              Banks and Insurance companies lose billions of dollars every year
              to fraud. Traditional methods of fraud detection play an important
              role in minimizing these losses. However increasingly
              sophisticated fraudsters have developed a variety of ways to elude
              discovery, both by working together, and by leveraging various
              other means of constructing false identities.
            </p>

            <h5>Explanation of Scenario</h5>

            <p>
              While no fraud prevention measures can ever be perfect,
              significant opportunity for improvement lies in looking beyond the
              individual data points, to the connections that link them.
              Oftentimes these connections go unnoticed until it is too late—
              something that is unfortunate, as these connections oftentimes
              hold the best clues.
            </p>
            <h5>Typical Scenario</h5>

            <p>
              While the exact details behind each first-party fraud collusion
              vary from operation to operation, the pattern below illustrates
              how fraud rings commonly operate:
            </p>

            <ul>
              <li>A group of two or more people organize into a fraud ring</li>
              <li>
                The ring shares a subset of legitimate contact information, for
                example phone numbers and addresses, combining them to create a
                number of synthetic identities
              </li>
              <li>
                Ring members open accounts using these synthetic identities
              </li>
              <li>
                New accounts are added to the original ones: unsecured credit
                lines, credit cards, overdraft protection, personal loans, etc.
              </li>
              <li>
                The accounts are used as normally, with regular purchases and
                timely payments
              </li>
              <li>
                Banks increase the revolving credit lines over time, due to the
                observed responsible credit behavior
              </li>
              <li>
                One day the ring “busts out”, coordinating their activity,
                maxing out all of their credit lines, and disappearing
              </li>
              <li>
                Sometimes fraudsters will go a step further and bring all of
                their balances to zero using fake checks immediately before the
                prior step, doubling the damage
              </li>
              <li>
                Collections processes ensue, but agents are never able to reach
                the fraudster
              </li>
              <li>The uncollectible debt is written off</li>
            </ul>

            <h5>Explanation of Solution</h5>

            <p>
              Graph databases offer new methods of uncovering fraud rings and
              other sophisticated scams with a high-level of accuracy, and are
              capable of stopping advanced fraud scenarios in real-time.
            </p>

            <h5>How Graph Databases Can Help</h5>
            Augmenting one’s existing fraud detection infrastructure to support
            ring detection can be done by running appropriate entity link
            analysis queries using a graph database, and running checks during
            key stages in the customer & account lifecycle, such as:
            <ul>
              <li>At the time the account is created</li>
              <li>During an investigation</li>
              <li>As soon as a credit balance threshold is hit</li>
              <li>When a check is bounced</li>
            </ul>

            <p>
              Real-time graph traversals tied to the right kinds of events can
              help banks identify probable fraud rings: during or even before
              the Bust-Out occurs.
            </p>
          </b-col></b-row
        >
      </b-container>
      <b-container>
        <b-row
          ><b-col>
            <Neo
              id="cypherAll"
              clazz="viz"
              :cypher="neo.cypherAll"
              :uri="neo.uri"
              :user="neo.user"
              :password="neo.password"
            ></Neo></b-col
          ><b-col class="cypher">
            <h5>Sample Dataset</h5>
            <codemirror v-model="sample" :options="cmOptions" />
          </b-col>
        </b-row>
      </b-container>
    </b-card>

    <b-card>
      <b-container>
        <h4>Share Info</h4>

        <b-row
          ><b-col md-7><b-table striped hover :items="table1"></b-table></b-col
          ><b-col
            ><codemirror
              v-model="cypherShareInfo"
              :options="cmOptions" /></b-col
        ></b-row>
        <b-row> </b-row></b-container
    ></b-card>
    <b-card>
      <b-container>
        <h4>Fraud Risk</h4>
        <b-row>
          <b-col md-7><b-table striped hover :items="table2"></b-table></b-col
          ><b-col
            ><codemirror v-model="cypherFraudRing" :options="cmOptions"
          /></b-col>
          ></b-row
        >
      </b-container>
    </b-card>

    <ul>
      <li>
        Ref:
        <a
          href="https://github.com/neo4j-contrib/gists/blob/master/other/BankFraudDetection.adoc"
          >neo4j gist</a
        >
      </li>
      <li>
        Ref:
        <a href="https://www.kaggle.com/ntnu-testimon/paysim1"
          >Kaggle Synthetic Financial Datasets For Fraud Detection</a
        >
      </li>
      <li>
        Ref:
        <a href="https://www.sisu.io/posts/paysim/">blog post</a>
        <a href="https://guides.neo4j.com/sandbox/fraud-detection/index.html"
          >graph solution</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
// import { Component, Vue } from "vue-property-decorator";
import { codemirror } from "vue-codemirror";

// import base style
import "codemirror/lib/codemirror.css";
// import language js
// import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/cypher/cypher.js";

// import theme style
import "codemirror/theme/base16-light.css";
import neo4j from "neo4j-driver";

import Neo from "@/components/Neo.vue";
export default {
  components: { Neo, codemirror },
  // mounted() {},
  data() {
    return {
      table1: [],
      table2: [],
      // code: "const a = 10",
      cmOptions: {
        tabSize: 4,
        mode: "application/x-cypher-query",
        // theme: "base16-light",
        lineNumbers: false,
        // line: true
        // more CodeMirror options...
      },
      img: require("../assets/FraudDetection.png"),
      cypherShareInfo: `MATCH 		(accountHolder:AccountHolder)-[]->(contactInformation)
WITH 		contactInformation,
      count(accountHolder) AS RingSize
MATCH 		(contactInformation)<-[]-(accountHolder)
WITH 		collect(accountHolder.UniqueId) AS AccountHolders,
      contactInformation, RingSize
WHERE 		RingSize > 1
RETURN 		AccountHolders AS FraudRing,
      labels(contactInformation) AS ContactType,
      RingSize
ORDER BY 	RingSize DESC`,
      cypherFraudRing: `MATCH 		(accountHolder:AccountHolder)-[]->(contactInformation)
WITH 		contactInformation,
			count(accountHolder) AS RingSize
MATCH 		(contactInformation)<-[]-(accountHolder),
			(accountHolder)-[r:HAS_CREDITCARD|HAS_UNSECUREDLOAN]->(unsecuredAccount)
WITH 		collect(DISTINCT accountHolder.UniqueId) AS AccountHolders,
			contactInformation, RingSize,
			SUM(CASE type(r)
				WHEN 'HAS_CREDITCARD' THEN unsecuredAccount.Limit
				WHEN 'HAS_UNSECUREDLOAN' THEN unsecuredAccount.Balance
				ELSE 0
			END) as FinancialRisk
WHERE 		RingSize > 1
RETURN 		AccountHolders AS FraudRing,
			labels(contactInformation) AS ContactType,
			RingSize,
			round(FinancialRisk) as FinancialRisk
ORDER BY 	FinancialRisk DESC`,

      neo: {
        cypherAll: "MATCH p=()-[r]->() RETURN p;",
        uri: process.env.NEO4J_URI || "bolt+s://bolt.lab.skysager.com:7687",
        user: process.env.NEO4J_USER || "neo4j",
        password: process.env.NEO4J_PASSWORD || "KnockDataNu",
      },

      sample: `// Create account holders
CREATE (accountHolder1:AccountHolder {
       		FirstName: "John",
       		LastName: "Doe",
       		UniqueId: "JohnDoe" })

CREATE (accountHolder2:AccountHolder {
			FirstName: "Jane",
			LastName: "Appleseed",
			UniqueId: "JaneAppleseed" })

CREATE (accountHolder3:AccountHolder {
			FirstName: "Matt",
			LastName: "Smith",
			UniqueId: "MattSmith" })

// Create Address
CREATE (address1:Address {
			Street: "123 NW 1st Street",
			City: "San Francisco",
			State: "California",
			ZipCode: "94101" })

// Connect 3 account holders to 1 address
CREATE (accountHolder1)-[:HAS_ADDRESS]->(address1),
       (accountHolder2)-[:HAS_ADDRESS]->(address1),
       (accountHolder3)-[:HAS_ADDRESS]->(address1)

// Create Phone Number
CREATE (phoneNumber1:PhoneNumber { PhoneNumber: "555-555-5555" })

// Connect 2 account holders to 1 phone number
CREATE (accountHolder1)-[:HAS_PHONENUMBER]->(phoneNumber1),
       (accountHolder2)-[:HAS_PHONENUMBER]->(phoneNumber1)

// Create SSN
CREATE (ssn1:SSN { SSN: "241-23-1234" })

// Connect 2 account holders to 1 SSN
CREATE (accountHolder2)-[:HAS_SSN]->(ssn1),
       (accountHolder3)-[:HAS_SSN]->(ssn1)

// Create SSN and connect 1 account holder
CREATE (ssn2:SSN { SSN: "241-23-4567" })<-[:HAS_SSN]-(accountHolder1)

// Create Credit Card and connect 1 account holder
CREATE (creditCard1:CreditCard {
			AccountNumber: "1234567890123456",
			Limit: 5000, Balance: 1442.23,
			ExpirationDate: "01-20",
			SecurityCode: "123" })<-[:HAS_CREDITCARD]-(accountHolder1)

// Create Bank Account and connect 1 account holder
CREATE (bankAccount1:BankAccount {
			AccountNumber: "2345678901234567",
			Balance: 7054.43 })<-[:HAS_BANKACCOUNT]-(accountHolder1)

// Create Credit Card and connect 1 account holder
CREATE (creditCard2:CreditCard {
			AccountNumber: "1234567890123456",
			Limit: 4000, Balance: 2345.56,
			ExpirationDate: "02-20",
			SecurityCode: "456" })<-[:HAS_CREDITCARD]-(accountHolder2)

// Create Bank Account and connect 1 account holder
CREATE (bankAccount2:BankAccount {
			AccountNumber: "3456789012345678",
			Balance: 4231.12 })<-[:HAS_BANKACCOUNT]-(accountHolder2)

// Create Unsecured Loan and connect 1 account holder
CREATE (unsecuredLoan2:UnsecuredLoan {
			AccountNumber: "4567890123456789-0",
			Balance: 9045.53,
			APR: .0541,
			LoanAmount: 12000.00 })<-[:HAS_UNSECUREDLOAN]-(accountHolder2)

// Create Bank Account and connect 1 account holder
CREATE (bankAccount3:BankAccount {
			AccountNumber: "4567890123456789",
			Balance: 12345.45 })<-[:HAS_BANKACCOUNT]-(accountHolder3)

// Create Unsecured Loan and connect 1 account holder
CREATE (unsecuredLoan3:UnsecuredLoan {
			AccountNumber: "5678901234567890-0",
			Balance: 16341.95, APR: .0341,
			LoanAmount: 22000.00 })<-[:HAS_UNSECUREDLOAN]-(accountHolder3)

// Create Phone Number and connect 1 account holder
CREATE (phoneNumber2:PhoneNumber {
			PhoneNumber: "555-555-1234" })<-[:HAS_PHONENUMBER]-(accountHolder3)

RETURN *`,
    };
  },
  mounted() {
    const uri = process.env.NEO4J_URI || "bolt+s://bolt.lab.skysager.com:7687"; // "bolt://localhost:7687";
    const user = process.env.NEO4J_USER || "neo4j";
    const password = process.env.NEO4J_PASSWORD || "KnockDataNu"; // "admin",
    console.log(`${uri}?${user}/${password}`);

    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    const session = driver.session();
    session.run(this.cypherShareInfo).then((result) => {
      session.close();
      this.table1 = result.records.map((record) => record.toObject());
    });

    const session2 = driver.session();
    session2.run(this.cypherFraudRing).then((result) => {
      session2.close();
      console.log(result);
      this.table2 = result.records.map((record) => record.toObject());
      console.log(this.table2);
    });
  },
};
// export default class Home extends Vue {}
</script>


<style>
.full-window {
  height: 100%;
}

.viz {
  width: 500px;
  height: 500px;
  border: 1px solid lightgray;
  font: 22pt arial;
}

.CodeMirror {
  height: 400px !important;
}
</style>