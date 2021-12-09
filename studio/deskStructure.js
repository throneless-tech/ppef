import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
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
        .title("Healthcare Navigator")
        .child(
          S.document()
            .schemaType("healthcareNavigator")
            .documentId("healthcareNavigator")
        ),
      ...S.documentTypeListItems().filter(
        listItem =>
          !["settings", "healthcareNavigator", "worldviewProgram"].includes(
            listItem.getId()
          )
      )
    ]);
