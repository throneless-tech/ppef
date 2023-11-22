export const structure = async (S, context) => {
  return S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.document()
            .schemaType("settings")
            .documentId("settings")
        ),
      S.listItem()
        .title("Worldview Program")
        .child(
          S.document()
            .schemaType("worldviewProgram")
            .documentId("worldviewProgram")
        ),
      S.listItem()
        .title("Issue Areas")
        .child(
          S.document()
            .schemaType("issueArea")
            .documentId("issueArea")
        ),
      S.listItem()
        .title("Healthcare Navigator")
        .child(
          S.document()
            .schemaType("healthcareNavigator")
            .documentId("healthcareNavigator")
        ),
      S.listItem()
        .title("Publications (Page)")
        .child(
          S.document()
            .schemaType("publicationsPage")
            .documentId("publicationsPage")
        ),
      ...S.documentTypeListItems().filter(
        listItem =>
          ![
            "settings",
            "healthcareNavigator",
            "worldviewProgram",
            "publicationsPage",
            "issueArea",
          ].includes(listItem.getId())
      )
    ]);
}