export default {
  name: "navigator",
  title: "Navigator",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "company",
      title: "Company",
      type: "string"
    },
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "address1",
      title: "Address Line 1",
      type: "string"
    },
    {
      name: "address2",
      title: "Address Line 2",
      type: "string"
    },
    {
      name: "mobile",
      title: "Mobile Number",
      description: "For consistency, use the format (123) 456-7890.",
      type: "string"
    },
    {
      name: "tollfree",
      title: "Toll Free Number",
      description: "For consistency, use the format (800) 456-7890.",
      type: "string"
    },
    {
      name: "fax",
      title: "Fax Number",
      description: "For consistency, use the format (123) 456-7890.",
      type: "string"
    },
    {
      name: "email",
      title: "Email Address",
      description: "Include full email address, for instance, name@mail.org",
      type: "string"
    },
    {
      name: "counties",
      title: "Counties",
      description: "The counties that this navigator covers.",
      type: "tags"
    }
  ],
  preview: {
    select: {
      title: "name"
    }
  }
};