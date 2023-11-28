export default {
  name: "sectionStaff",
  title: "Staff Section",
  type: "object",
  fields: [
    {
      name: "staff",
      type: "array",
      of: [{ type: "staff" }]
    },
  ]
}