"use client";

import React, { ReactNode } from "react";

// Loanbuddy Privacy Notice (source: "Privacy Notice.docx", last updated 27 October 2026).
// Each item is [bold label, text]; a null label renders the text alone.
const PRIVACY_NOTICE_SECTIONS: { title: string; intro?: string; items: [string | null, string][] }[] = [
  {
    title: "PERSONAL DATA WE COLLECT",
    intro: "To evaluate your account registration and process credit facilities, we must collect and process your personal data. This includes:",
    items: [
      ["Identity Data:", "Your full name, NRIC number (MyKad), date of birth, gender, nationality, and live facial biometric scans (collected via platform)."],
      ["Contact Data:", "Residential address, mailing address, email address, and mobile phone number."],
      ["Financial Data:", "Employment history, employer details, monthly income, bank account numbers, payslips, bank statements, EPF statements, and tax files."],
      ["Credit Profile Data:", "Credit scores, payment histories, bankruptcy checks, and active litigation records obtained from registered credit reporting agencies."],
      ["Technical Data:", "IP address, device type, operating system, and browser tracking information when you interact with our Platform."],
    ],
  },
  {
    title: "SOURCE OF YOUR PERSONAL DATA",
    intro: "We collect your personal data directly from you when you fill out forms, register an account, or upload files to our Platform. Additionally, we collect data from third-party sources, including:",
    items: [
      [null, "Registered credit reporting agencies (e.g., CTOS, CRIF, Experian) and Bank Negara Malaysia’s Central Credit Reference Information System (CCRIS)."],
      [null, "Government agencies or statutory bodies (e.g., LHDN, KWSP) where permitted."],
      [null, "Fraud prevention agencies and public databases."],
    ],
  },
  {
    title: "PURPOSE OF PROCESSING YOUR DATA",
    intro: "Your personal data is processed for necessary operational, legal, and credit assessment purposes, including:",
    items: [
      ["Identity Verification:", "Authenticating your identity via electronic Know-Your-Customer (eKYC) workflows."],
      ["Credit Evaluation:", "Assessing your creditworthiness, debt-to-income ratios, and financial eligibility for funding facilities."],
      ["Contractual Obligation:", "Generating, digitally signing, and executing your statutory Moneylending Agreement (Schedule J/K)."],
      ["Disbursement & Collections:", "Managing loan fund releases, tracking monthly repayments, issuing statements, and conducting recovery actions if a default occurs."],
      ["Regulatory Compliance:", "Fulfilling statutory obligations under the Moneylenders Act 1951, Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 (AMLA), and tax regulations."],
    ],
  },
  {
    title: "DISCLOSURE OF YOUR PERSONAL DATA",
    intro: "We keep your data confidential. However, to operate the Service and fulfill legal requirements, we may disclose your data to the following third parties:",
    items: [
      ["Regulators & Government Authorities:", "The Ministry of Housing and Local Government (KPKT), Bank Negara Malaysia (BNM), Inland Revenue Board (LHDN), the Royal Malaysia Police (PDRM), and other relevant government authorities."],
      ["Credit Reporting Agencies:", "Authorized credit bureaus to log repayment behavior or update active default statuses."],
      ["Service Partners:", "Our designated payment gateway partners (such as FPX providers), secure identity verification software partners, and cloud storage providers."],
      ["Professional Advisors:", "Our legal counsel, auditors, and authorized debt collection agencies in the event of default legal recovery."],
    ],
  },
  {
    title: "YOUR RIGHTS UNDER THE PDPA",
    intro: "As a data subject in Malaysia, you hold specific statutory rights regarding your information:",
    items: [
      ["Right of Access & Correction:", "You have the right to request a copy of your personal data or request updates to inaccurate or obsolete data via your Account settings."],
      ["Right to Withdraw Consent:", "You may withdraw your consent for us to process your data for marketing or non-essential features. However, please note that withdrawing consent for core operational data will result in the immediate termination of your platform Account and loan eligibility."],
    ],
  },
  {
    title: "DATA RETENTION AND SECURITY",
    items: [
      ["Security:", "We protect your personal data using industry-standard Secure Socket Layer (SSL) encryption, firewalls, and restricted administrative access protocols."],
      ["Retention:", "We retain your financial and identity data for as long as your account remains active, or for a mandatory period of seven (7) years following the full settlement of your loan facility to satisfy statutory tax, audit, and moneylending record-keeping laws."],
    ],
  },
  {
    title: "CONTACT AND COMPLAINTS",
    intro: "If you have questions regarding this Privacy Notice, or if you wish to exercise your data access and correction rights, please contact our team at:",
    items: [
      ["Email:", "support@loanbuddy.com.my"],
      ["Mailing Address:", "Loanbuddy Credit Sdn. Bhd., No. 15, Tingkat 4, Jalan Medan Tuanku 1, 50300 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur"],
    ],
  },
];

// Loanbuddy Terms of Service (source: "Term of Service.docx", last updated 27 October 2026).
// Rendered as numbered sections (1.) with clauses (1.1.); clause 8.2 refers to "Section 8.1", so keep the order.
const TERMS_OF_SERVICE_SECTIONS: { title: string; clauses: string[] }[] = [
  {
    title: "INTRODUCTION",
    clauses: [
      "Welcome to the Digital Moneylending Platform (the \"Service\") operated by Loanbuddy Credit Sdn. Bhd. (Company Registration No. 200901039396/882536-K) (formerly known as Loan Buddy Sdn. Bhd.) (referred to as “Loanbuddy”, \"Company\", \"we\", \"us\" or \"our\"). Loanbuddy is a licensed moneylender, and our services are strictly subject to the regulations and protections mandated under the Moneylenders Act 1951. These Terms of Use govern your access to and use of our website and mobile application (collectively, the \"Platform\").",
      "Please read these Terms of Use carefully before registering an account (\"Account\"). By clicking the \"Accept\" checkbox or creating an Account on the Platform, you signify your irrevocable agreement to be bound by these Terms of Use. If you do not agree, please do not use our Service.",
      "To register an Account or use the Service, you must be a Malaysian citizen or resident who is at least eighteen (18) years old and not above sixty (60) years old. We reserve the right to refuse access to the Platform or reject Account registration at our sole discretion.",
      "We reserve the right to upgrade, modify, or perform routine technical maintenance on the Platform's interface and underlying software infrastructure at any time. Where such modifications directly impact your repayment channels, statement access, or active account management, we will provide you with reasonable advance notice via your registered email or via an in-app notification. For the avoidance of doubt, no platform modification or technical suspension shall alter, overwrite, or invalidate the fixed financial terms, interest rates, or payment schedules explicitly agreed upon in your executed statutory Moneylending Agreement (Schedule J/K).",
    ],
  },
  {
    title: "ACCEPTANCE OF THE SERVICE",
    clauses: [
      "These Terms of Use govern your digital access to the Platform. They do not constitute a standalone loan offer or a loan agreement.",
      "Every individual loan application approved through this Platform is strictly subject to the electronic execution of a standalone statutory moneylending agreement in the format prescribed under Schedule J (Unsecured Loan) or Schedule K (Secured Loan) of the Moneylenders (Control and Licensing) Regulations 2003 (each, referred to as \"Moneylending Agreement\").",
      "In the event of any direct conflict or inconsistency between these Terms of Use and an executed statutory Moneylending Agreement, the terms of the statutory Moneylending Agreement shall prevail to the extent of the inconsistency.",
    ],
  },
  {
    title: "DIGITAL ACCOUNT ACTIVATION & CREDIT CHECKS",
    clauses: [
      "Upon receiving your registration or loan application, we will conduct required legal and credit due diligence.",
      "You expressly consent to provide true and accurate personal data, including your full name, NRIC number, income statements, bank statements, and any other verification details requested by the Platform (\"Due Diligence Information\").",
      "You authorize us to conduct credit and legal checks with relevant institutions, including but not limited to the Central Credit Reference Information System (CCRIS) managed by Bank Negara Malaysia, and any registered credit reporting agencies operating under the Credit Reporting Agencies Act 2010.",
      "You acknowledge that details regarding your repayment behavior or Account default may be reported to registered credit reporting agencies, who may share this information with their subscribers.",
    ],
  },
  {
    title: "DIGITAL EXECUTION & ELECTRONIC DOCUMENT DELIVERY",
    clauses: [
      "By using this Platform, you agree to conduct all transactions and execute all agreements electronically. You acknowledge that completing in-app verification steps, entering a one-time passcode (OTP), or clicking any \"Accept\", \"Confirm\", or \"Sign\" button or checkbox constitutes your electronic signature. You agree that this electronic format carries the exact same legal validity, enforceability, and binding power as a traditional handwritten signature on paper.",
      "In strict compliance with the Moneylenders Act 1951, a digital copy of your fully executed and stamped statutory Moneylending Agreement will be generated and delivered to your registered email or made instantly downloadable inside your Account portal. This document will be delivered to you prior to or at the exact time of the loan disbursement, ensuring you hold a valid legal copy before funds are released.",
    ],
  },
  {
    title: "INTEREST RATES, STATUTORY FEES, AND LOAN DISBURSEMENT",
    clauses: [
      "Interest rates vary per loan product but will never exceed 18% per annum simple interest for unsecured loans, or 12% per annum simple interest for secured loans, as mandated by Section 17A of the Moneylenders Act 1951.",
      "Interest is calculated daily based on a 365-day year, starting from the exact day your loan funds are disbursed into your bank account.",
      "Before we disburse your loan, we will deduct the required stamp duty and legal attestation fees from your total approved amount. In strict compliance with the Moneylenders Act 1951, no legal fees, processing charges, administrative costs, or platform service fees shall be deducted from your loan disbursement amount. The final cash amount sent to your bank account will be your approved loan minus only these two permitted statutory costs.",
    ],
  },
  {
    title: "REPAYMENT AND LATE FEES",
    clauses: [
      "Your monthly repayment amounts and due dates will be clearly listed in your digital Account portal and issued via a Monthly Statement on the Platform. Payments must be settled by 11.59 P.M. on the specified due date using our approved payment channels (such as FPX Online Banking).",
      "If you fail to repay an installment by the due date, a late payment fee will be charged. In strict compliance with Schedule J/K, this late fee is calculated at a simple interest rate of 8% per annum on the overdue installment amount only, charged on a day-to-day basis from the date of default until fully settled.",
      "For the avoidance of doubt, late interest will never be compounded, nor will it be charged against any remaining unpaid loan principal that has not yet fallen due.",
    ],
  },
  {
    title: "REPAYMENT FLEXIBILITY AND COMPLAINTS MECHANISM",
    clauses: [
      "Borrowers maintain the right to settle their remaining loan balances ahead of schedule at any time. Upon receiving your early settlement request via the Platform, the Company will calculate the exact outstanding principal and simple interest accrued up to that specific day to provide you with your final payoff amount.",
      "If you encounter errors in your online monthly statements or wish to log a formal dispute regarding platform calculations, you may contact our internal careline at support@loanbuddy.com.my.",
    ],
  },
  {
    title: "PLATFORM ACCEPTABLE USE AND SUSPENSION",
    clauses: [
      "You agree not to exploit, hack, or reverse-engineer the digital infrastructure of the Platform, nor use automated scripts, bots, or scrapers to extract platform data. You are strictly prohibited from providing falsified or spoofed financial documentation during the application journey.",
      "If you fail to settle outstanding sums by the given due date, or if we have reasonable grounds to suspect fraudulent activity or a breach of Section 8.1, we reserve the right to limit, restrict, or temporarily suspend your digital Platform Account.",
      "If an account default continues past fourteen (14) days from written notice (sent via physical or electronic means), we reserve the right to demand the immediate full repayment of all outstanding principal and statutory late fees, and initiate legal recovery actions to the extent permitted by Malaysian law.",
    ],
  },
  {
    title: "INDEMNITY AND LIMITATION OF LIABILITY",
    clauses: [
      "You agree to indemnify and hold harmless the Company, its directors, and employees from any third-party claims or legal expenses arising from your violation of these Terms of Use, your misuse of the Platform, or your breach of any applicable laws.",
      "Platform Interruption Disclaimer: While we make reasonable attempts to maintain 24/7 uptime, we shall not be held liable for failure or delays in processing repayments, verifying documentation, or delivering digital notifications where such events stem from third-party payment gateway outages, telecommunications network errors, or scheduled system infrastructure upgrades.",
      "To the maximum extent permitted by Malaysian law, our total corporate liability under these platform Terms of Use shall not exceed Ringgit Malaysia Five Hundred (RM500). This limitation does not affect or alter any obligations explicitly governed by your executed statutory Moneylending Agreement.",
    ],
  },
  {
    title: "GOVERNING LAW AND JURISDICTION",
    clauses: [
      "These Terms of Use shall be governed by, interpreted, and construed in accordance with the laws of Malaysia.",
      "Any dispute, legal action, or claim arising out of your use of the Platform or default under these Terms of Use shall be brought exclusively before the Civil Courts of Malaysia (including the Subordinate Courts or High Court, depending on the jurisdictional monetary value of the claim).",
    ],
  },
];

function LegalModal({
  title,
  bodyClassName,
  onClose,
  children,
}: {
  title: string;
  bodyClassName: string;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="modal-dialog modal-xl modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title modal-title-custom-1">{title}</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className={`modal-body ${bodyClassName}`}>{children}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PrivacyNoticeModal({ onClose }: { onClose: () => void }) {
  return (
    <LegalModal title="LOANBUDDY PRIVACY NOTICE" bodyClassName="privay-policy-modal" onClose={onClose}>
      <div className="container">
        <p>
          <strong>LAST UPDATED:</strong> 27 October 2026
        </p>
        <p>
          Loanbuddy Credit Sdn. Bhd. (Company Registration No. 200901039396/882536-K) (&quot;<strong>the Company</strong>&quot;, &quot;<strong>we</strong>&quot;, &quot;<strong>us</strong>&quot;, or &quot;<strong>our</strong>&quot;) values your privacy. This Privacy Notice is issued in accordance with the Malaysian <strong>Personal Data Protection Act 2010 (PDPA)</strong>. It explains how we collect, use, process, disclose, and protect your personal data when you access our website, mobile application, and digital services (collectively, the &quot;<strong>Platform</strong>&quot;).
        </p>

        {PRIVACY_NOTICE_SECTIONS.map((section, sectionIdx) => (
          <React.Fragment key={section.title}>
            <h5>{sectionIdx + 1}. {section.title}</h5>
            {section.intro && <p className="p-dasar-privasi">{section.intro}</p>}
            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
              {section.items.map(([label, text]) => (
                <li key={text} className="li-dasar-privasi" style={{ marginBottom: "6px" }}>
                  {label && <strong>{label} </strong>}
                  {text}
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    </LegalModal>
  );
}

export function TermsOfServiceModal({ onClose }: { onClose: () => void }) {
  return (
    <LegalModal title="LOANBUDDY TERMS OF SERVICE" bodyClassName="term-of-use-modal" onClose={onClose}>
      <p>
        <strong>Last updated:</strong> 27 October 2026
      </p>

      {TERMS_OF_SERVICE_SECTIONS.map((section, sectionIdx) => (
        <React.Fragment key={section.title}>
          <h5>{sectionIdx + 1}. {section.title}</h5>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {section.clauses.map((clause, clauseIdx) => (
              <li key={clause} className="li-terma-syarat d-flex" style={{ gap: "10px", marginBottom: "8px" }}>
                <strong style={{ flex: "0 0 2.75rem" }}>
                  {sectionIdx + 1}.{clauseIdx + 1}.
                </strong>
                <span>{clause}</span>
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </LegalModal>
  );
}
