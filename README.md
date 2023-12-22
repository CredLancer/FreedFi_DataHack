# FreeFi: Empowering freelancers with financial freedom through DeFi
## Mission:

FreeFi is transforming the lending landscape by providing secure, on-chain solutions for freelancers and communities. We leverage decentralized finance (DeFi) and Trust Credentials to offer instantaneous credit scoring, transparency, and accountability in the lending process. Join us in shaping a future of trustless lending, redefining financial access for DAOs, member organizations, and beyond.

## Problem:

Freelancers face significant challenges securing loans due to inconsistent work history, limiting access to conventional financing. This hinders their aspirations for stable living, homeownership, car leasing, and more.

## Key Insights:

- Upwork: 58% of freelancers struggle with financing due to unstable income.
- Federal Reserve: 70% of non-employer firms (often freelancers) face funding shortfalls.
- Freelancers Union: 63% of freelancers encounter mortgage difficulties due to irregular income.

## Solution:

FreeFi introduces a community-driven DeFi lending platform facilitating private, uncollateralized loans tailored for close-knit groups. Our innovative approach harnesses the power of DeFi to bring credit capital and investment returns directly to community members.

## About Smart Contracts: 

#### Owner and Balances:

- Data: Tracks the contract owner's address (owner) and user balances (balances).
- Purpose: Manages ownership and user balances.

#### Borrowed Amounts and Active Loans:

- Data: Records borrowed amounts (borrowedAmounts) and active loan status (hasActiveLoan).
- Purpose: Manages loan-related information and enforces one loan at a time per borrower.

### Business Insights:
#### Events (Borrowed and Repaid):

- Data Emitted: Logs business activities through events (Borrowed and Repaid).
- Purpose: Provides a transparent record of key transactions.

#### Deposit, Borrow, and Repay Functions:

- Data Affected: Modifies balances and loan-related data.
- Purpose: Facilitates core lending and repayment actions.

#### Balance and Borrowed Amount Queries:

- Data Accessed: Allows users to check balances and borrowed amounts.
- Purpose: Enhances user experience and financial visibility.

### Business Considerations:
#### Loan Commitment Concept:

- Concept Introduced: Users may agree to an initial "loan commitment amount."
- Purpose: Indicates user willingness for potential loans.

#### Security Considerations:

- Error Handling and Modifiers: Enhances security with error handling and access control.
- Purpose: Prevents unauthorized or erroneous actions.

#### Limitation on Active Loans:

- Implementation Choice: Users are limited to one active loan.
- Purpose: Mitigates risk by restricting multiple simultaneous loans.

In summary, the smart contract manages ownership, user balances, loans, and provides insights through events. It introduces a loan commitment concept and security features, including access control and error handling. The limitation on active loans enhances risk management.
