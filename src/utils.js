export const isEmail = (str) => {
  // Email Regex String
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(str);
};

export const allCaseTypes = [
  { value: "PIL", label: "Public Interest Litigation (PIL)" },
  { value: "Murder", label: "Murder" },
  { value: "Assault", label: "Assault" },
  { value: "Sexual offense", label: "Sexual offense" },
  { value: "Kidnapping", label: "Kidnapping" },
  { value: "Robbery", label: "Robbery" },
  { value: "Cybercrime", label: "Cybercrime" },
  {
    value: "VIOLATION OF FUNDAMENTAL RIGHTS",
    label: "Violation of Fundamental Rights",
  },
  {
    value: "CHALLENGES TO THE VALIDITY OF LAWS",
    label: "Challenges to the Validity of Laws",
  },
  {
    value: "PUBLIC INTEREST LITIGATION CASES",
    label: "Public Interest Litigation Cases",
  },
  { value: "Habeas Corpus", label: "Habeas Corpus" },
  { value: "Mandamus", label: "Mandamus" },
  { value: "Certiorari", label: "Certiorari" },
  { value: "Land acquisition", label: "Land acquisition" },
  { value: "Boundary disputes", label: "Boundary disputes" },
  { value: "Tenancy disputes", label: "Tenancy disputes" },
  { value: "Land title disputes", label: "Land title disputes" },
  {
    value: "Unfair dismissal or termination",
    label: "Unfair dismissal or termination",
  },
  { value: "Employment contract", label: "Employment contract" },
  { value: "Wage and Benefits", label: "Wage and Benefits" },
  { value: "Workplace Discrimination", label: "Workplace Discrimination" },
  { value: "Workplace Harassment", label: "Workplace Harassment" },
  { value: "Income Tax disputes", label: "Income Tax disputes" },
  { value: "Goods and Services Tax", label: "Goods and Services Tax" },
  { value: "Customs and Excise duty", label: "Customs and Excise duty" },
  { value: "Trademark infringement", label: "Trademark infringement" },
  { value: "Patent infringement", label: "Patent infringement" },
  { value: "Trade secret violation", label: "Trade secret violation" },
  { value: "Copyright infringement", label: "Copyright infringement" },
  { value: "Copyright violations", label: "Copyright violations" },
  { value: "Bigamy", label: "Bigamy" },
  { value: "Patent disputes", label: "Patent disputes" },
  {
    value: "Government and public sector employee grievances",
    label: "Government and public sector employee grievances",
  },
  {
    value: "Administrative decisions challenges",
    label: "Administrative decisions challenges",
  },
  { value: "Service-related disputes", label: "Service-related disputes" },
  {
    value: "Environmental Pollution Cases",
    label: "Environmental Pollution Cases",
  },
  { value: "Wildlife Protection Cases", label: "Wildlife Protection Cases" },
  {
    value: "Public Health-related Cases",
    label: "Public Health-related Cases",
  },
  {
    value: "Matters related to Public Infrastructure and Utilities",
    label: "Matters related to Public Infrastructure and Utilities",
  },
  { value: "Dowry-related complaints", label: "Dowry-related complaints" },
  { value: "Domestic Violence", label: "Domestic Violence" },
  { value: "Child Custody", label: "Child Custody" },
  { value: "Divorce", label: "Divorce" },
  { value: "Alimony", label: "Alimony" },
  { value: "Child Support", label: "Child Support" },
  { value: "Financial Dispute", label: "Financial Dispute" },
  { value: "Emotional Abuse", label: "Emotional Abuse" },
  { value: "Child Abuse", label: "Child Abuse" },
  { value: "Religious Dispute", label: "Religious Dispute" },
  { value: "Dowry Harassment", label: "Dowry Harassment" },
  { value: "Drug offense", label: "Drug offense" },
  { value: "Maintenance", label: "Maintenance" },
  { value: "Parenting Dispute", label: "Parenting Dispute" },
];

export const convertDate = (dateString) => {
  // Convert to Date object
  let date = new Date(dateString);

  // Extract day, month, and year
  let day = date.getUTCDate();
  let month = date.getUTCMonth() + 1; // Months are zero-based, so we add 1
  const year = date.getUTCFullYear();

  // Format day, month, and year with leading zeros if necessary
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  // Construct the formatted date string
  const formattedDate = day + "-" + month + "-" + year;
  return formattedDate;
};
