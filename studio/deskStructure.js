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
      ...S.documentTypeListItems().filter(
        listItem => !["settings", "worldviewProgram"].includes(listItem.getId())
      )
    ]);
